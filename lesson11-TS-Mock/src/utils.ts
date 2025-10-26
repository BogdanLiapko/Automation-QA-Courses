import { ElectricCar } from './electric-car';
import { GasCar } from './gas-car';
import { IChargeable, IRefuelable } from './interfaces/interface';

export type Vehicle = ElectricCar | GasCar;

export function serviceVehicle(
    vehicle: Vehicle,
    action: 'charge' | 'refuel'
): string {
    if (vehicle instanceof ElectricCar && action === 'charge') {
        (vehicle as IChargeable).charge();
        return 'charged';
    } else if (vehicle instanceof GasCar && action === 'refuel') {
        (vehicle as IRefuelable).refuel();
        return 'refueled';
    } else {
        console.log(`${vehicle.brand} ${vehicle.model}: unsupported operation`);
        return 'unsupported';
    }
}
