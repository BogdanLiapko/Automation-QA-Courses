import { test, expect } from '@playwright/test';
import { IncomesClient } from '../../src/api/clients/incomes-client';
import { AuthClient } from '../../src/api/clients/auth-client';
import { TEST_USER } from '../../src/utils/test-users';
import { AddIncomeRequest } from '../../src/api/models/income.models';

test('API: add income', async ({ request }) => {
    await new AuthClient(request).login(TEST_USER.username, TEST_USER.password);

    const payload: AddIncomeRequest = {
        date: '2025-12-15',
        income: '10000.00',
        currency: 'UAH',
        cash: false,
        comment: 'Automation test income'
    };

    const response = await new IncomesClient(request).addIncome(payload);

    expect(response.status).toBe('Success');
});
