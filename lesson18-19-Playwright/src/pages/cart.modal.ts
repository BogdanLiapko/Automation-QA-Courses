import { Locator, Page, expect } from '@playwright/test';

export class CartModal {
    public readonly root: Locator;
    public readonly title: Locator;

    public constructor(private page: Page) {
        this.root = page.locator('rz-cart-modal, rz-shopping-cart, rz-modal[qa="cart"]');
        this.title = this.root.locator('h3, h2, .modal-title');
    }

    public async waitOpened(): Promise<void> {
        await expect(this.root).toBeVisible({ timeout: 10000 });
    }

    public async waitClosed(): Promise<void> {
        await expect(this.root).toBeHidden({ timeout: 10000 });
    }

    public async expectTitleContains(text: string | RegExp): Promise<void> {
        await expect(this.title).toHaveText(text, { timeout: 5000 });
    }
}
