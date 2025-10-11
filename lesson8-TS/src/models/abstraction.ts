export abstract class Abstract {
    public id: string;
    public name: string;

    public constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public abstract describe(): string;
}

export class Product extends Abstract {
    public price: number;
    public year: number;

    public constructor(id: string, name: string, price: number, year: number) {
        super(id, name);
        this.price = price;
        this.year = year;
    }

    public describe(): string {
        return `${this.name} (${this.year}) — $${this.price}`;
    }
}
