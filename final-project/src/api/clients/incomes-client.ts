import { APIRequestContext, expect } from '@playwright/test';
import { API_CONFIG } from '../config/api.config';
import { AddIncomeRequest } from '../models/income.models';
import { ApiSuccessResponse } from '../models/common.models';

export class IncomesClient {
    public constructor(private request: APIRequestContext) {}

    public async addIncome(data: AddIncomeRequest): Promise<ApiSuccessResponse> {
        const response = await this.request.post(`${API_CONFIG.baseUrl}${API_CONFIG.v2}/incomes/add`, { data });

        expect(response.status()).toBe(200);
        return response.json() as Promise<ApiSuccessResponse>;
    }

    public async getAll(): Promise<Record<string, unknown>> {
        const response = await this.request.get(`${API_CONFIG.baseUrl}${API_CONFIG.v2}/incomes`);

        expect(response.status()).toBe(200);
        return response.json();
    }
}
