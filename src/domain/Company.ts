import { v4 as uuid } from 'uuid';
import faker from 'faker';
import { CommonOptions } from 'child_process';

export interface Company {
    id: string;
    name: string;
    state: State;
}

export enum State {
    POSITIVE,
    NEGATIVE,
    NEUTRAL
}


export const initial: Company[] = [
    { name: 'Tinder', state: State.NEUTRAL, id: uuid() },
    { name: 'Ambivation', state: State.NEUTRAL, id: uuid() },
    { name: 'Google', state: State.NEUTRAL, id: uuid() },
    { name: 'Tesla', state: State.NEUTRAL, id: uuid() }
];

export function generateCompanies(n: number) {
    const companies: Company[] = [];
    for(let i = 0; i < n; i++) {
        companies[i] = {
            name: faker.company.companyName(),
            state: State.NEUTRAL,
            id: uuid()
        }
    }

    return companies;
}