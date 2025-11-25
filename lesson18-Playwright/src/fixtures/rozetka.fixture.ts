import { test as base } from '@playwright/test';
import { RozetkaNotebooksPage } from '../pages/rozetka-notebooks.page';

export interface RozetkaFixture {
    catalogPage: RozetkaNotebooksPage;
}

export const test = base.extend<RozetkaFixture>({
    catalogPage: async ({ page }, use) => {
        const catalog = new RozetkaNotebooksPage(page);
        await use(catalog);
    }
});

export const expect = test.expect;
