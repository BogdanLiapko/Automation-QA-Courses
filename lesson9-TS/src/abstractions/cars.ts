export abstract class Cars {
    protected brand: string;

    public constructor(brand: string) {
        this.brand = brand;
    }

    public startEngine(): void {
        console.log(`${this.brand}: engine started`);
    }

    public abstract move(): void;
}
