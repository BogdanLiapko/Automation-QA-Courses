import { Page, Locator, expect } from '@playwright/test';

export class CartModal {
    public readonly modal: Locator;

    public constructor(page: Page) {
        this.modal = page.locator('rz-modal');
    }

    public async waitOpened(): Promise<void> {
        await this.modal.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.modal).toBeVisible({ timeout: 10000 });
    }

    public async waitClosed(): Promise<void> {
        await this.modal.waitFor({ state: 'hidden', timeout: 10000 });
        await expect(this.modal).toBeHidden({ timeout: 10000 });
    }
}
