import { test as base } from '@playwright/test';
import { RozetkaNotebooksPage } from '../pages/rozetka-notebooks.page';
import { HeaderCart } from '../components/header.cart.component';
import { CartModal } from '../pages/cart.modal';
import { ProductTile } from '../components/product-tile.component';

export interface RozetkaFixture {
    catalogPage: RozetkaNotebooksPage;
    cart: HeaderCart;
    cartModal: CartModal;
    productTile: ProductTile;
}

export const test = base.extend<RozetkaFixture>({
    catalogPage: async ({ page }, use) => {
        const catalog = new RozetkaNotebooksPage(page);
        await use(catalog);
    },
    cart: async ({ page }, use) => {
        await use(new HeaderCart(page));
    },
    cartModal: async ({ page }, use) => {
        await use(new CartModal(page));
    },
    productTile: async ({ page }, use) => {
        const root = page.locator('.goods-tile');
        await use(new ProductTile(page, root));
    }
});

export const expect = test.expect;
