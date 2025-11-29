import { Locator, Page, expect } from '@playwright/test';

export class ProductTile {
    public readonly root: Locator;
    public readonly title: Locator;
    public readonly price: Locator;
    public readonly buyButton: Locator;
    public readonly addedBadge: Locator;

    public constructor(private page: Page, root: Locator) {
        this.root = root;
        this.title = this.root.locator('h3');
        this.price = this.root.locator('rz-tile-price div:last-child');
        this.buyButton = this.root.locator('rz-buy-button button');
        this.addedBadge = this.root.locator('.goods-tile__cart-added, .in-cart, .goods-tile__badge');
    }

    public async addToCart(): Promise<void> {
        await this.buyButton.waitFor({ state: 'visible', timeout: 15000 });
        try {
            await this.buyButton.click();
        } catch {
            await this.buyButton.click({ force: true });
        }
    }

    public async expectHasPrice(): Promise<void> {
        await expect(this.price).toBeVisible({ timeout: 10000 });
    }

    public async expectHasBuyButton(): Promise<void> {
        await expect(this.buyButton).toBeVisible({ timeout: 10000 });
    }

    public async expectAddedBadgeVisible(): Promise<void> {
        await expect(this.addedBadge).toBeVisible({ timeout: 10000 });
    }

    public async getPriceNumber(): Promise<number> {
        await this.price.waitFor({ state: 'visible', timeout: 10000 });
        const txt = (await this.price.innerText()) ?? '';
        const n = parseInt(txt.replace(/\D/g, ''), 10);
        return Number.isNaN(n) ? 0 : n;
    }

    public async getTitleText(): Promise<string> {
        await this.title.waitFor({ state: 'visible', timeout: 10000 });
        return (await this.title.innerText())?.trim() ?? '';
    }
}
