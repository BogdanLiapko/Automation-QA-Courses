import { Page } from '@playwright/test';

export class BasePage {
    public constructor(protected page: Page) {}
}
