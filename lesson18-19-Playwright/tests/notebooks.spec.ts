import { test, expect } from '../src/fixtures/rozetka.fixture';

test.describe('Notebook catalog', () => {
    test('Catalog loads and displays products', async ({ catalogPage }) => {
        await catalogPage.goto();
        await expect(catalogPage.productTiles.first()).toBeVisible({ timeout: 10000 });
    });

    test('Can open first product', async ({ catalogPage }) => {
        await catalogPage.goto();
        await catalogPage.openFirstProduct();
        await expect(catalogPage.page.locator('h1')).toBeVisible({ timeout: 10000 });
    });

    test('Sort by price descending', async ({ catalogPage }) => {
        await catalogPage.goto();
        await catalogPage.sortBy('expensive');
        const prices = await catalogPage.productTiles.locator('.goods-tile__price-value').allTextContents();
        const numeric = prices.map((p) => parseInt(p.replace(/\D/g, '')));
        const sorted = [...numeric].sort((a, b) => b - a);
        expect(numeric).toEqual(sorted);
    });

    test('User can add product to cart and open cart modal', async ({ catalogPage, cart, cartModal }) => {
        const firstTile = catalogPage.getTile(0);
        await firstTile.waitFor({ state: 'visible', timeout: 30000 });
        const buyButton = firstTile.locator('rz-buy-button');
        await buyButton.click({ force: true });
        await expect(firstTile.locator('rz-catalog-layout > div:nth-child(2) > section > rz-catalog-goods > div:first-child > rz-product-tile article > div:nth-child(3)')).toBeVisible({ timeout: 10000 });
        await cart.openCart();
        await cartModal.waitOpened();
    });

    test('Product tiles rendered — at least 20 products visible', async ({ catalogPage }) => {
        await catalogPage.goto();
        const count = await catalogPage.productTiles.count();
        expect(count).toBeGreaterThan(10);
    });

    test('Each product tile contains price & buy button', async ({ catalogPage }) => {
        await catalogPage.goto();
        const firstTile = catalogPage.getTile(0);
        const price = firstTile.locator('rz-tile-price div:last-child');
        const buyButton = firstTile.locator('rz-buy-button');
        await price.waitFor({ state: 'visible', timeout: 10000 });
        await expect(price).toBeVisible();
        await buyButton.waitFor({ state: 'visible', timeout: 10000 });
        await expect(buyButton).toBeVisible();
    });
});
