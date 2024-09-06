export interface Config {
    palabras: string[];
    errores: number;
}

export interface Rank {
    id: string;
    name: string;
    word: string;
    points: number;
    date: string;
}

export interface Ranks extends Array<Rank> {}


export interface AlertMessages {
    [key: string]: string;
  }