import { expect, assert } from 'chai';
import { ElectricCar } from '../src/electric-car';

describe('ElectricCar class', () => {
    let tesla: ElectricCar;

    beforeEach(() => {
        tesla = new ElectricCar('Tesla', 'Model S');
    });

    it('should reduce battery level after usage', () => {
        tesla.useBattery(20);
        expect(tesla.getBatteryLevel()).to.equal(80);
    });

    it('should not reduce battery below 0', () => {
        tesla.useBattery(150);
        assert.equal(tesla.getBatteryLevel(), 0);
    });

    it('should recharge to 100%', () => {
        tesla.useBattery(50);
        tesla.charge();
        expect(tesla.getBatteryLevel()).to.equal(100);
    });
});
