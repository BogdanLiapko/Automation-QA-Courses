import { After, Status } from '@cucumber/cucumber';

After(async function (scenario) {
    const page = this.page;

    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await page.screenshot();
        this.attach(screenshot, 'image/png');
    }
});
