import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {CarForm, Cars} from '../Components';

export const CarPage: FC = () => {
    return (
        <div>
            <div>
                <CarForm/></div>
            <hr/>
            <div><Cars/>
                <Outlet/></div>
        </div>
    );
};

