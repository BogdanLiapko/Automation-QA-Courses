import { Page, Locator, expect } from '@playwright/test';

export class HeaderCart {
    public readonly icon: Locator;
    public readonly badge: Locator;

    public constructor(private page: Page) {
        this.icon = page.locator('button[qa="header-cart"]');
        this.badge = this.icon.locator('span, div').filter({ hasText: /\d/ }).first();
    }

    public async openCart(): Promise<void> {
        await this.icon.waitFor({ state: 'visible', timeout: 10000 });
        await this.icon.click();
    }

    public async getCartCount(): Promise<number> {
        try {
            await this.badge.waitFor({ state: 'visible', timeout: 3000 });
            const txt = (await this.badge.innerText()) ?? '';
            const n = parseInt(txt.replace(/\D/g, ''), 10);
            return Number.isNaN(n) ? 0 : n;
        } catch {
            return 0;
        }
    }

    public async expectBadgeUpdated(minimum = 1): Promise<void> {
        const count = await this.getCartCount();
        if (count < minimum) {
            throw new Error(`Expected cart count to be at least ${minimum}, but got ${count}`);
        }
    }

    public async expectIconVisible(): Promise<void> {
        await expect(this.icon).toBeVisible({ timeout: 10000 });
    }
}
