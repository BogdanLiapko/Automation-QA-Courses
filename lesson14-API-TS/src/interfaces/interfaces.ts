export interface ApiResponse<T> {
    status: number;
    data: T;
}

export interface CatImage {
    id: string;
    url: string;
}

export interface FavouriteResponse {
    id: number;
    message: string;
}

export interface VoteResponse {
    id: number;
    image_id: string;
    value: number;
}
