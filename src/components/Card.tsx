import React, { MouseEvent } from 'react';
import { Company, State } from '../domain/Company';
import { Close } from './svg/Close';
import { Tick } from './svg/Tick';

interface Props {
    onPositve: (event: MouseEvent) => void;
    onNegative: (event: MouseEvent) => void;
    name: string;
    state: State;
}

export const Card = ({ name, onNegative, onPositve, state }: Props) => {

    const backgroundColor = () => {
        switch (state) {
            case State.NEUTRAL:
                return '#fff';
            case State.POSITIVE:
                return 'green';
            case State.NEGATIVE:
                return 'red';
            default:
                break;
        }
    }

    return (
        <div style={{ backgroundColor: backgroundColor() }} className="card">
            <div className="actions">
                <Close onClick={onNegative} width={30} height={30} />
                <Tick onClick={onPositve} width={35} height={35} />
            </div>
            <h2>{name}</h2>
        </div>
    );
};