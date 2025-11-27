import { Locator, Page } from '@playwright/test';

export class ProductTile {
    public readonly root: Locator;
    public readonly title: Locator;
    public readonly price: Locator;
    public readonly buyButton: Locator;

    public constructor(page: Page, root: Locator) {
        this.root = root;
        this.title = root.locator('h3');
        this.price = root.locator('rz-tile-price div:last-child');
        this.buyButton = root.locator('rz-buy-button');
    }

    public async addToCart(): Promise<void> {
        await this.buyButton.waitFor({ state: 'visible', timeout: 10000 });
        await this.buyButton.click();
    }

    public async getPrice(): Promise<string> {
        await this.price.waitFor({ state: 'visible', timeout: 10000 });
        return (await this.price.textContent())?.trim() || '';
    }

    public async getTitle(): Promise<string> {
        await this.title.waitFor({ state: 'visible', timeout: 10000 });
        return (await this.title.textContent())?.trim() || '';
    }
}
