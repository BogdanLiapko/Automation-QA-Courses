import { expect, Locator, Page } from '@playwright/test';

export class RozetkaNotebooksPage {
    public readonly page: Page;
    public readonly catalogGrid: Locator;
    public readonly productTiles: Locator;

    public constructor(page: Page) {
        this.page = page;

        this.catalogGrid = page.locator('rz-catalog-layout');

        this.productTiles = page.locator('rz-product-tile article');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/ua/notebooks/c80004/', { waitUntil: 'domcontentloaded' });

        await this.catalogGrid.waitFor({ state: 'visible', timeout: 30000 });

        await expect(this.productTiles.first()).toBeVisible({ timeout: 30000 });
    }

    public async openFirstProduct(): Promise<void> {
        await this.productTiles.first().click();
    }
}
