import { expect } from 'chai';
import CatApiService from '../src/cat-api-service';
import { CatApi } from '../src/cat-api-objects';
import {CatImage } from '../src/interfaces/interfaces';
import { FavouriteResponse } from '../src/interfaces/interfaces';
import { VoteResponse } from '../src/interfaces/interfaces';

describe('TheCatAPI Integration Tests with fetch', () => {
    let image_id: string;
    let favourite_id: number;
    let vote_id: number;

    it('Get a random image', async () => {
        const res = await CatApiService.get<CatImage[]>(CatApi.searchImage);
        expect(res.status).to.equal(200);
        image_id = res.data[0].id;
    });

    it('Add cat to favorites', async () => {
        const res = await CatApiService.post<FavouriteResponse>(CatApi.favourites, { image_id });
        expect([200, 201]).to.include(res.status);
        favourite_id = res.data.id;
    });

    it('Vote for the cat', async () => {
        const res = await CatApiService.post<VoteResponse>(CatApi.votes, { image_id, value: 1 });
        expect(res.status).to.be.oneOf([200, 201]);
        vote_id = res.data.id;
    });

    it('Check your voice', async () => {
        const res = await CatApiService.get<VoteResponse[]>(CatApi.votes);
        const found = res.data.some((v: VoteResponse) => v.id === vote_id);
        expect(found).to.be.true;
    });

    it('Remove cat from favorites', async () => {
        const res = await CatApiService.delete<FavouriteResponse>(CatApi.favouriteById(favourite_id));
        expect(res.status).to.equal(200);
    });
});
