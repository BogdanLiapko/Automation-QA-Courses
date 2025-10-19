import { describe, it, expect, assert } from 'vitest';
import { serviceVehicle } from '../src/utils';
import { ElectricCar } from '../src/electric-car';
import { GasCar } from '../src/gas-car';

describe('serviceVehicle function', () => {
    it('should charge an electric car', () => {
        const tesla = new ElectricCar('Tesla', 'Model 3');
        const result = serviceVehicle(tesla, 'charge');
        expect(result).toBe('charged');
        assert.equal(result, 'charged');
    });

    it('should refuel a gas car', () => {
        const toyota = new GasCar('Toyota', 'Corolla');
        const result = serviceVehicle(toyota, 'refuel');
        expect(result).toBe('refueled');
        assert.equal(result, 'refueled');
    });

    it('should return unsupported for wrong type', () => {
        const tesla = new ElectricCar('Tesla', 'Model 3');
        const result = serviceVehicle(tesla, 'refuel');
        expect(result).toBe('unsupported');
    });
});
