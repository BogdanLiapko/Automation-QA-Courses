import { ApiObject, ApiObjectData } from './models/api-object';
import { ApiObjectClass, ApiObjectDataClass } from './models/api-object.class';
import { Product } from './models/abstraction';

async function getApiObjects() : Promise<ApiObject[]> {
    const response = await fetch('https://api.restful-api.dev/objects');
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await response.json();
    return json as ApiObject[];
}
getApiObjects().then(data => console.log(data));

async function getApiObjectsData() : Promise<ApiObjectData[]> {
    const response = await fetch('https://api.restful-api.dev/objects');
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await response.json();
    return json as ApiObjectData[];
}
getApiObjectsData().then(data => console.log(data));

async function getApiObjectsClass() : Promise<ApiObjectClass[]> {
    const response = await fetch('https://api.restful-api.dev/objects');
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await response.json();
    return json.map((item: Partial<ApiObjectClass>) => new ApiObjectClass(item));
}

getApiObjectsClass().then(data => console.log(data));

async function getApiObjectsDataClass() : Promise<ApiObjectDataClass[]> {
    const response = await fetch('https://api.restful-api.dev/objects');
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await response.json();
    return json.map((item: Partial<ApiObjectDataClass>) => new ApiObjectDataClass(item));
}

getApiObjectsDataClass().then(data => console.log(data));

const product = new Product('1', 'Laptop', 1500, 2023);
console.log(product.describe());
console.log(product.id);
console.log(product.name);
console.log(product.price);
console.log(product.year);
