export interface ApiObject {
    id: string;
    name: string;
}

export interface ApiObjectData{
    color: string;
    capacity?: string;
    'capacity GB'?: string;
    price?: number;
}

