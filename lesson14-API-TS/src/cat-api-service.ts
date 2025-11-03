import {ApiResponse} from './interfaces/interfaces';
import dotenv from 'dotenv';
dotenv.config();

export class CatApiService {
    private baseUrl: string;
    private apiKey: string;

    public constructor (baseUrl?: string, apiKey?: string) {
        this.baseUrl = baseUrl || process.env.BASE_URL || 'https://api.thecatapi.com/v1';
        this.apiKey = apiKey || process.env.API_KEY || 'live_b4PbuvritoHZvZmEORiREgqGVJDzqRR9XfUEt9mVWdVLPG6Vu4kUatP9UikISbUq';
    }

    public async get<T>(path: string): Promise<ApiResponse<T>> {
        const res = await fetch(this.baseUrl + path, {
            method: 'GET',
            headers: { 'x-api-key': this.apiKey }
        });
        return this.handleResponse<T>(res);
    }

    public async post<T>(path: string, body: object): Promise<ApiResponse<T>> {
        const res = await fetch(this.baseUrl + path, {
            method: 'POST',
            headers: {'x-api-key': this.apiKey, 'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        });
        return this.handleResponse<T>(res);
    }

    public async delete<T>(path: string): Promise<ApiResponse<T>> {
        const res = await fetch(this.baseUrl + path, {
            method: 'DELETE',
            headers: { 'x-api-key': this.apiKey }
        });
        return this.handleResponse<T>(res);
    }

    private async handleResponse<T>(res: Response): Promise<ApiResponse<T>> {
        const data = await res.json().catch(() => ({} as T));
        return { status: res.status, data };
    }
}
