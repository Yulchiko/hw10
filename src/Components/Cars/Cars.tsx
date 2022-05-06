import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector } from '../../Hook';

import {carActions} from "../../Redux";
import { Car } from '../Car/Car';

export const Cars:FC= () => {
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[dispatch])

    return (
        <div>
            {cars && cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

