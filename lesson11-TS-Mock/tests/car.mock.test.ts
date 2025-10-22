import { expect } from 'chai';
import sinon from 'ts-sinon';
import { ElectricCar } from '../src/electric-car';
import { GasCar } from '../src/gas-car';
import { serviceVehicle } from '../src/utils';

describe('Car Mock Test', () => {
    let tesla: ElectricCar;
    let toyota: GasCar;

    beforeEach(() => {
        tesla = new ElectricCar('Tesla', 'Model 3');
        toyota = new GasCar('Toyota', 'Corolla');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should call charge() when servicing an electric car', () => {
        const chargeSpy = sinon.spy(tesla, 'charge');
        const result = serviceVehicle(tesla, 'charge');
        expect(chargeSpy.calledOnce).to.be.true;
        expect(result).to.equal('charged');
    });

    it('should call refuel() when servicing a gas car', () => {
        const refuelSpy = sinon.spy(toyota, 'refuel');
        const result = serviceVehicle(toyota, 'refuel');
        expect(refuelSpy.calledOnce).to.be.true;
        expect(result).to.equal('refueled');
    });

    it('should not call refuel() on an electric car', () => {
        const refuelSpy = sinon.spy(tesla, 'refuel');
        const result = serviceVehicle(tesla, 'refuel');
        expect(refuelSpy.notCalled).to.be.true;
        expect(result).to.equal('unsupported');
    });

    it('should stub move() to verify it was called', () => {
        const moveStub = sinon.stub(tesla, 'move');
        tesla.move();
        expect(moveStub.calledOnce).to.be.true;
    });

    it('should mock console.log when charging', () => {
        const consoleStub = sinon.stub(console, 'log');
        serviceVehicle(tesla, 'charge');
        expect(consoleStub.calledWithMatch('charging the battery')).to.be.true;
    });
});
