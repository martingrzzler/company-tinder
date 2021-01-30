import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Company, State } from '../domain/Company';

interface Props {
    setCompanies: Function;
}

export const Import = ({ setCompanies }: Props) => {

    const [data, setData] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!data) return;

        let names: string[] = [];

        if(/[A-Z,a-z,1-9]+\n/g.test(data)) {
            names = data.split('\n').filter(c => c != '');
        } 
        else if(/[A-Z,a-z,1-9]+,/g.test(data)) {
            names = data.split(',');
        }
        else {
            throw new Error('Invalid Input')
        }
        
        const companies = names.map((name): Company  => {
            return {
                name,
                state: State.NEUTRAL,
                id: uuid()
            }
        });
        setCompanies(companies);
        
    }

    return (
        <form onSubmit={onSubmit} className="import">
            <textarea 
                value={data} 
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setData(e.target.value)} 
                className="input">
            </textarea>
            <button className="start">Start</button>
        </form>
    );
}