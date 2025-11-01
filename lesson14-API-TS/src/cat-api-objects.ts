export const CatApi = {
    searchImage: '/images/search',
    favourites: '/favourites',
    votes: '/votes',

    favouriteById: (id: number | string) => `/favourites/${id}`,
    voteById: (id: number | string) => `/votes/${id}`
};
