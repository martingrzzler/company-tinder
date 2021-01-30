import React from 'react';

interface Props {
    name: string;
}

export const Item = ({ name }: Props) => {
    return (
        <div className="item">
            <p>{name}</p>
        </div>
    );
}