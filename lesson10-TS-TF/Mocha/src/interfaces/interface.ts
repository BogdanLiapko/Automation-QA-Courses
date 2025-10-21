export interface IDrivable {
    drive(): void;
    refuel(): void;
}

export interface IRefuelable {
    refuel(): void;
}

export interface IChargeable {
    charge(): void;
}
