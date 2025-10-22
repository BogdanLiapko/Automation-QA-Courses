import { Car } from './car';
import { IChargeable } from './interfaces/interface';

export class ElectricCar extends Car implements IChargeable {
    public charge(): void {
        console.log(`${this.brand} ${this.model}: charging the battery...`);
    }
    private batteryLevel = 100;

    public move(): void {
        console.log(`${this.brand} ${this.model} moving on electric power`);
    }

    public refuel(): void {
        console.log(`${this.brand} ${this.model}: charging the battery...`);
        this.batteryLevel = 100;
    }

    public useBattery(percent: number): void {
        this.batteryLevel = Math.max(0, this.batteryLevel - percent);
    }

    public getBatteryLevel(): number {
        return this.batteryLevel;
    }
}
