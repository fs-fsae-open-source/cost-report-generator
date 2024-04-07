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
    fastener: string;
    supplier?: string;
    category?: string;
    unit1: string;
    unit2: string;
    size1Description?: string;
    size2Description?: string;
    c1?: number;
    c2?: number;
    comment: string;
}

export interface Fastener {
    use: string;
    size1?: number;
    size2?: number;
    quantity: number;
    type: FastenerType; // this is probably a fastenerTypeID to link to type idk
}