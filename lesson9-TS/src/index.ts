import { IDrivable } from './interfaces/interface';
import { ElectricCar } from './electric-car';
import { GasCar } from './gas-car';

function testDrive(vehicle: IDrivable): void {
    vehicle.drive();
    vehicle.refuel();
}

const Tesla = new ElectricCar('Tesla', 'Model S');
const BMW = new GasCar('BMW', 'X5');

testDrive(Tesla);
console.log('---');
testDrive(BMW);
