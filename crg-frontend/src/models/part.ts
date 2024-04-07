export interface Part {
    name: string;
    fasteners: { [key: number]: Fastener }
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
    id: number;
    fastener: string;
    supplier?: string;
    category?: string;
    unit1?: string;
    unit2?: string;
    size1Description?: string;
    size2Description?: string;
    c1?: number;
    c2?: number;
    comment: string;
}

export interface Fastener {
    id: number,
    use: string;
    size1?: number;
    size2?: number;
    quantity: number;
    typeID: number;
}