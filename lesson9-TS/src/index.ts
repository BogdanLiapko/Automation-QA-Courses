import { IDrivable, IChargeable, IRefuelable } from './interfaces/interface';
import { ElectricCar } from './electric-car';
import { GasCar } from './gas-car';

function testDrive(vehicle: IDrivable): void {
    vehicle.drive();
    vehicle.refuel();
}

function chargeStation(car: IChargeable): void {
    car.charge();
}

function refuelStation(car: IRefuelable): void {
    car.refuel();
}

const Tesla = new ElectricCar('Tesla', 'Model S');
const BMW = new GasCar('BMW', 'X5');

testDrive(Tesla);
console.log('---');
testDrive(BMW);
console.log('---');
chargeStation(Tesla);
console.log('---');
refuelStation(BMW);
