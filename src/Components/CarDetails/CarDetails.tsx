import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { ICar } from '../../Interface';
import {carService} from "../../Service";

export const CarDetails:FC = () => {
    const {id} = useParams<{id:string}>()
    const [car, setCar] = useState<ICar | null>(null);

    useEffect(()=>{
        carService.getById(id as string).then(({data})=> setCar(data))
    },[id])
    return (
        <div>
            {car && <div>{JSON.stringify(car)}</div>}
        </div>
    );
};
