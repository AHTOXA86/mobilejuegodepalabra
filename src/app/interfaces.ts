export interface Config {
    palabras: string[];
    errores: number;
}

export interface Ranks {
    name: string;
    word: string;
    points: number;
    date: string;
}

export interface Ranges extends Array<Ranks> {}
