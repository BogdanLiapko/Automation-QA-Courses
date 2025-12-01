import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';

Given('the user open Rozetka Notebooks page', async function (this: RobotDreamsWorld) {
    await this.rozetkaNotebooksPage.goto();
});

Then('the first product tile should be visible', async function (this: RobotDreamsWorld) {
    const tile = this.rozetkaNotebooksPage.productTiles.first();
    expect(await tile.isVisible()).to.be.true;
});

When('the user open the first product', async function (this: RobotDreamsWorld) {
    await this.rozetkaNotebooksPage.openFirstProduct();
});

Then('the user should see the product details page', async function (this: RobotDreamsWorld) {
    expect(this.page.url()).to.include('/ua/acer-nhdaaeu001/p528975609/');
});
