import React from 'react';
import { Company, State } from '../domain/Company';
import { Item } from './Item';

interface Props {
    companies: Company[];
}

export const Sidebar = ({ companies }: Props) => {
    
    const renderItems = (state: State) => {
        return companies.map(c => {
            if (c.state == state) {
                return <Item key={c.id} name={c.name} />
            }
        });
    }

    return (
        <div className="sidebar">
            <div className="selected">
                <h2>SELECTED</h2>
                {renderItems(State.POSITIVE)}
            </div>
            <div className="tossed">
                <h2>TRASH</h2>
                {renderItems(State.NEGATIVE)}
            </div>
        </div>
    );
}