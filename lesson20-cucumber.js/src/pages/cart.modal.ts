import { Locator, Page } from 'playwright';
import { expect } from 'chai';

export class CartModal {
    public readonly root: Locator;
    public readonly title: Locator;

    public constructor(private page: Page) {
        this.root = page.locator('rz-cart-modal, rz-shopping-cart, rz-modal[qa="cart"]');
        this.title = this.root.locator('h3, h2, .modal-title');
    }

    public async waitOpened(): Promise<void> {
        await this.root.isVisible({ timeout: 10000 });
        expect(await this.root.isVisible()).to.be.true;
    }

    public async waitClosed(): Promise<void> {
        await this.root.isHidden({ timeout: 10000 });
        expect(await this.root.isHidden()).to.be.true;
    }

    public async expectTitleContains(text: string): Promise<void> {
        await this.title.waitFor({ state: 'visible', timeout: 10000 });
        const titleText = (await this.title.innerText()).trim();
        expect(titleText).to.include(text);
    }
}
