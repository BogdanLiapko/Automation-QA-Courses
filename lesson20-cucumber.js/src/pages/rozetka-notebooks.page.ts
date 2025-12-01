import { Locator, Page } from 'playwright';
import { expect } from 'chai';
import { ProductTile } from '../components/product-tile.component.ts';

export class RozetkaNotebooksPage {
    public readonly page: Page;
    public readonly catalogGrid: Locator;
    public readonly productTiles: Locator;
    public readonly sortSelect: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.catalogGrid = page.locator('rz-catalog-layout');
        this.productTiles = page.locator('rz-product-tile article').nth(0);
        this.sortSelect = page.locator('#sort');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/ua/notebooks/c80004/', { waitUntil: 'domcontentloaded' });
        await this.catalogGrid.waitFor({ state: 'visible', timeout: 30000 });
        expect(await this.catalogGrid.isVisible()).to.be.true;
        await this.expectProductsLoaded();
    }

    public async expectProductsLoaded(): Promise<void> {
        await (this.productTiles.first()).isVisible({ timeout: 20000 });
        expect(await this.productTiles.isVisible()).to.be.true;
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
        return texts.map((t) => parseInt(t.replace(/\D/g, ''), 10)).filter((n) => !Number.isNaN(n));
    }

    public async getProductsCount(): Promise<number> {
        return await this.productTiles.count();
    }
}
