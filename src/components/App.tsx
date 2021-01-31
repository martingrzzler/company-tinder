import React, { useState } from 'react';
import { Company, State, initial, generateCompanies } from '../domain/Company';
import { Card } from './Card';
import { Import } from './Import';
import { Sidebar } from './Sidebar';


export const App = () => {

    const [companies, setCompanies] = useState(generateCompanies(100));

    const onChange = (id: string, state: State) => {
        const updatedCompanies = companies.map(c => {
            if (c.id == id) {
               c.state = state;
            }
            return c;
        });
        setCompanies(updatedCompanies);
    }

    const renderCards = () => {
        return companies.map(company => {
            return <Card
                    onNegative={() => onChange(company.id, State.NEGATIVE)}
                    onPositve={() => onChange(company.id, State.POSITIVE)}
                    name={company.name}
                    key={company.id}
                    state={company.state}
                    />
        });
    }

    return (
        <div className="main">
            <div className="header">Company Tinder</div>
            <Sidebar companies={companies} />
            <div className="content">
                <Import setCompanies={setCompanies} />
                <div className="cards">
                    {renderCards()}
                </div>
            </div>
        </div>
    );
}