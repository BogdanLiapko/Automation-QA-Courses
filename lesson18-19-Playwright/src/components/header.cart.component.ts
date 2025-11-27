import { Page, Locator } from '@playwright/test';

export class HeaderCart {
    public readonly icon: Locator;

    public constructor(private page: Page) {
        this.icon = page.locator('button[qa="header-cart"]');
    }

    public async openCart(): Promise<void> {
        await this.icon.waitFor({ state: 'visible', timeout: 10000 });
        await this.icon.click();
    }
}
