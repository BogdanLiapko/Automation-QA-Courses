import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/ui/pages/login-page';
import { IncomesPage } from '../../src/ui/pages/incomes-page';
import { TEST_USER } from '../../src/utils/test-users';

test('UI: incomes page opens', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(TEST_USER.username, TEST_USER.password);

    const incomes = new IncomesPage(page);
    await incomes.open();

    await expect(page).toHaveURL(/incomes/);
});
