import { Car } from './car';

export class ElectricCar extends Car {
    private batteryLevel = 100;

    public move(): void {
        console.log(`${this.brand} ${this.model} moving on electric power`);
    }

    public refuel(): void {
        console.log(`${this.brand} ${this.model}: charging the battery...`);
        this.batteryLevel = 100;
    }
}
