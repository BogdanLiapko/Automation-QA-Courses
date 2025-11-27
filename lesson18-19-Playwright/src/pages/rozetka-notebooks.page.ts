import { expect, Locator, Page } from '@playwright/test';

export class RozetkaNotebooksPage {
    public readonly page: Page;
    public readonly catalogGrid: Locator;
    public readonly productTiles: Locator;
    public readonly sortSelect: Locator;
    public readonly addToCartButtons: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.catalogGrid = page.locator('rz-catalog-layout');
        this.productTiles = page.locator('rz-product-tile article');
        this.sortSelect = page.locator('#sort');
        this.addToCartButtons = page.locator('rz-product-tile article rz-buy-button');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/ua/notebooks/c80004/', { waitUntil: 'domcontentloaded' });
        await this.catalogGrid.waitFor({ state: 'visible', timeout: 30000 });
        await expect(this.productTiles.first()).toBeVisible({ timeout: 30000 });
    }

    public async openFirstProduct(): Promise<void> {
        await this.productTiles.first().click();
    }

    public async sortBy(option: string): Promise<void> {
        await this.sortSelect.selectOption(option);
        await this.page.waitForSelector('rz-product-tile', { state: 'visible' });
    }

    public async addFirstProductToCart(): Promise<void> {
        const button = this.addToCartButtons.first();
        await button.waitFor({ state: 'visible', timeout: 10000 });
        await button.click();
    }

    public getTile(index: number): Locator {
        return this.productTiles.nth(index);
    }
}
