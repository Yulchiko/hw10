import React, { FC } from 'react';

import {Outlet} from "react-router-dom";

export const Loyout:FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

