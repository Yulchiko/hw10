import React, { FC } from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import { useAppDispatch } from '../../Hook';
import { ICar } from '../../Interface';
import { carActions } from '../../Redux';

export const CarForm:FC = () => {
    const {register, handleSubmit, reset} = useForm<ICar>();
    const dispatch=useAppDispatch();

    const submit: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};
