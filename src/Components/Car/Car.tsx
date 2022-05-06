import React, { FC } from 'react';
import { ICar } from '../../Interface';
import {Link} from "react-router-dom";

interface IProps{
    car:ICar
}

export const Car:FC<IProps> = ({car:{id,price,model,year}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <hr/>
            <Link to={`${id}`}>
                <button>getDetails</button>
            </Link>
        </div>
    );
};

