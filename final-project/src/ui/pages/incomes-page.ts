import { BasePage } from './base-page';

export class IncomesPage extends BasePage {
    public async open(): Promise<void> {
        await this.page.goto('/incomes');
    }

    public async isIncomeVisible(amount: string): Promise<boolean> {
        return this.page.locator(`text=${amount}`).isVisible();
    }
}
