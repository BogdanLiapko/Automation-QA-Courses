import { expect, Locator, Page } from '@playwright/test';
import { ProductTile } from '../components/product-tile.component';

export class RozetkaNotebooksPage {
    public readonly page: Page;
    public readonly catalogGrid: Locator;
    public readonly productTiles: Locator;
    public readonly sortSelect: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.catalogGrid = page.locator('rz-catalog-layout');
        this.productTiles = page.locator('rz-product-tile article');
        this.sortSelect = page.locator('#sort');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/ua/notebooks/c80004/', { waitUntil: 'domcontentloaded' });
        await expect(this.catalogGrid).toBeVisible({ timeout: 30000 });
        await this.expectProductsLoaded();
    }

    public async expectProductsLoaded(): Promise<void> {
        await expect(this.productTiles.first()).toBeVisible({ timeout: 20000 });
    }

    public async openFirstProduct(): Promise<void> {
        await this.productTiles.first().click();
    }

    public async sortBy(option: string): Promise<void> {
        await this.sortSelect.selectOption(option);
        await this.page.waitForSelector('rz-product-tile', { state: 'visible' });
    }

    public getTileComponent(index: number): ProductTile {
        const tileRoot = this.productTiles.nth(index);
        return new ProductTile(this.page, tileRoot);
    }

    public async addFirstProductToCart(): Promise<void> {
        const tile = this.getTileComponent(0);
        await tile.addToCart();
    }

    public async getAllProductPrices(): Promise<number[]> {
        const priceLocators = this.page.locator('.goods-tile__price-value');
        const texts = await priceLocators.allTextContents();
        return texts.map(t => parseInt(t.replace(/\D/g, ''), 10)).filter(n => !Number.isNaN(n));
    }

    public async getProductsCount(): Promise<number> {
        return await this.productTiles.count();
    }
}

