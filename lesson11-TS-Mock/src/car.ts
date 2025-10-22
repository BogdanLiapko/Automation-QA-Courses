import { Cars } from './abstractions/cars';
import { IDrivable } from './interfaces/interface';

export abstract class Car extends Cars implements IDrivable {
    public model: string;

    public constructor(brand: string, model: string) {
        super(brand);
        this.model = model;
    }

    public drive(): void {
        console.log(`${this.brand} ${this.model} is driving`);
    }

    public abstract refuel(): void;
}
