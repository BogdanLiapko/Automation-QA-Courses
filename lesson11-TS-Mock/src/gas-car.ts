import { Car } from './car';
import { IRefuelable } from './interfaces/interface';

export class GasCar extends Car implements IRefuelable {
    private fuelLevel = 100;

    public move(): void {
        console.log(`${this.brand} ${this.model} moving on gas`);
    }

    public refuel(): void {
        console.log(`${this.brand} ${this.model}: fill up the gas tank...`);
        this.fuelLevel = 100;
    }

    public useFuel(percent: number): void {
        this.fuelLevel = Math.max(0, this.fuelLevel - percent);
    }

    public getFuelLevel(): number {
        return this.fuelLevel;
    }
}
