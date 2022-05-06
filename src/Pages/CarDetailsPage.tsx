import React, { FC } from 'react';
import {CarDetails} from "../Components";
import {Outlet} from "react-router-dom";

export const CarDetailsPage:FC = () => {
    return (
        <div style={{display:'flex', justifyContent:'start', transform:'translate(200px, -4150px)', color:'darkred'}}>
            <Outlet/>
            <CarDetails/>

                    </div>
    );
};

