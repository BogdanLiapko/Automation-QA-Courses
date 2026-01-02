import { test, expect } from '@playwright/test';
import { AuthClient } from '../../src/api/clients/auth-client';
import { IncomesClient } from '../../src/api/clients/incomes-client';
import { IncomesPage } from '../../src/ui/pages/incomes-page';
import { TEST_USER } from '../../src/utils/test-users';

test('API income visible in UI', async ({ request, page }) => {
    await new AuthClient(request).login(TEST_USER.username, TEST_USER.password);

    await new IncomesClient(request).addIncome({
        date: '2025-12-15',
        income: '7777',
        currency: 'UAH',
        cash: false
    });

    const incomes = new IncomesPage(page);
    await incomes.open();

    expect(await incomes.isIncomeVisible('7777')).toBeTruthy();
});
