export class ApiObjectClass {
    public id?: string;
    public name?: string;

    public constructor (init?: Partial<ApiObjectClass>) {
        Object.assign(this, init);
    }
}

export class ApiObjectDataClass {
    public color?: string;
    public capacity?: string;
    public 'capacity GB'?: string;
    public price?: number;

    public constructor (init?: Partial<ApiObjectDataClass>) {
        Object.assign(this, init);
    }
}
