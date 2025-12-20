import { APIRequestContext, expect } from '@playwright/test';
import { API_CONFIG } from '../config/api.config';

export class AuthClient {
    public constructor(private request: APIRequestContext) {}

    public async login(username: string, password: string): Promise<void> {
        const response = await this.request.post(`${API_CONFIG.baseUrl}${API_CONFIG.auth}/login`, { data: { username, password } });

        expect(response.status()).toBe(200);
    }
}
