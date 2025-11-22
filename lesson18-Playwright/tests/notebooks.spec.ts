import { test, expect } from '@playwright/test';
import { RozetkaNotebooksPage } from '../src/pages/rozetka-notebooks.page';

test.describe('Notebook catalog', () => {
    let catalogPage: RozetkaNotebooksPage;

    test.beforeEach(async ({ page }) => {
        catalogPage = new RozetkaNotebooksPage(page);
        await catalogPage.goto();
    });

    test('Catalog loads and displays products', async () => {
        await expect(catalogPage.productTiles.first()).toBeVisible();
    });

    test('Can open first product', async () => {
        await catalogPage.openFirstProduct();
        await expect(catalogPage.page.locator('h1')).toBeVisible();
    });
});
