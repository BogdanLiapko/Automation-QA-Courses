import { Car } from './car';

export class GasCar extends Car {
    private fuelLevel = 100;

    public move(): void {
        console.log(`${this.brand} ${this.model} moving on gas`);
    }

    public refuel(): void {
        console.log(`${this.brand} ${this.model}: fill up the gas tank...`);
        this.fuelLevel = 100;
    }
}
