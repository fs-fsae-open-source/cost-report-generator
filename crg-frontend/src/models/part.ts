export interface Part {
    name: string;
}

export interface Process {
    name: string;
    // unit_cost: number;
    // unit: string;
    // category: string;
    // toolingRequired: boolean;
    // nearNetShape: boolean;
    // comment: string;
}

export interface Material {
    name: string;
}

export interface FastenerType {
    description: string;
}

export interface Fastener {
    use: string;
    quantity: number;
    type: FastenerType;
}