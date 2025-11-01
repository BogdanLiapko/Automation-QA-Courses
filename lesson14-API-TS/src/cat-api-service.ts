import {ApiResponse} from './interfaces/interfaces';
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.BASE_URL || 'https://api.thecatapi.com/v1';
const API_KEY = process.env.API_KEY || 'live_b4PbuvritoHZvZmEORiREgqGVJDzqRR9XfUEt9mVWdVLPG6Vu4kUatP9UikISbUq';
class CatApiService {
    public static async get<T>(path: string): Promise<ApiResponse<T>> {
        const res = await fetch(BASE_URL + path, {
            method: 'GET',
            headers: { 'x-api-key': API_KEY }
        });
        return CatApiService.handleResponse<T>(res);
    }

    public static async post<T>(path: string, body: object): Promise<ApiResponse<T>> {
        const res = await fetch(BASE_URL + path, {
            method: 'POST',
            headers: {'x-api-key': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return CatApiService.handleResponse<T>(res);
    }

    public static async delete<T>(path: string): Promise<ApiResponse<T>> {
        const res = await fetch(BASE_URL + path, {
            method: 'DELETE',
            headers: { 'x-api-key': API_KEY }
        });
        return CatApiService.handleResponse<T>(res);
    }

    private static async handleResponse<T>(res: Response): Promise<ApiResponse<T>> {
        const data = await res.json().catch(() => ({} as T));
        return { status: res.status, data };
    }
}

export default CatApiService;
