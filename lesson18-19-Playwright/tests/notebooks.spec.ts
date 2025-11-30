import { test, expect } from '../src/fixtures/rozetka.fixture';

test.describe('Notebook catalog', () => {

    test('Catalog loads and displays products', async ({ catalogPage }) => {
        await catalogPage.goto();
        await expect(catalogPage.productTiles.first()).toBeVisible();
    });

    test('Can open first product', async ({ catalogPage }) => {
        await catalogPage.goto();
        await catalogPage.openFirstProduct();
        await expect(catalogPage.productTiles).toBeVisible();
    });

    test('Sort by price descending', async ({ catalogPage }) => {
        await catalogPage.goto();
        await catalogPage.sortBy('expensive');
        const prices = await catalogPage.getAllProductPrices();
        const sorted = [...prices].sort((a, b) => b - a);

        expect(prices).toEqual(sorted);
    });

    test('User can add product to cart and open cart modal', async ({ catalogPage, productTile, cart, cartModal }) => {
        await catalogPage.goto();
        await productTile.addToCart();
        const count = await cart.getCartCount();
        expect(count).toBeGreaterThan(0);
        await cart.openCart();
        await cartModal.waitOpened();
        await expect(cartModal.title).toBeVisible();
    });

    test('Product tiles rendered — at least 20 products visible', async ({ catalogPage }) => {
        await catalogPage.goto();
        const count = await catalogPage.productTiles.count();
        expect(count).toBeGreaterThan(10);
    });

    test('Each product tile contains price & buy button', async ({ catalogPage, productTile }) => {
        await catalogPage.goto();
        const price = productTile.price.first();
        const buyButton = productTile.buyButton.first();
        await price.waitFor({ state: 'visible', timeout: 10000 });
        await expect(price).toBeVisible();
        await buyButton.waitFor({ state: 'visible', timeout: 10000 });
        await expect(buyButton).toBeVisible();
    });
});

