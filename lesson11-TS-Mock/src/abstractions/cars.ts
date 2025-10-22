export abstract class Cars {
    public brand: string;

    public constructor(brand: string) {
        this.brand = brand;
    }

    public startEngine(): void {
        console.log(`${this.brand}: engine started`);
    }

    public abstract move(): void;
}
