import { BasePage } from './base-page';

export class LoginPage extends BasePage {
    public async open(): Promise<void>{
        await this.page.goto('/login');
    }

    public async login(email: string, password: string): Promise<void> {
        await this.page.fill('input[type="email"]', email);
        await this.page.fill('input[type="password"]', password);
        await this.page.click('button[type="submit"]');
    }
}
