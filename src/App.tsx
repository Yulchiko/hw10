import React, {FC} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {CarPage, Loyout, CarDetailsPage} from "./Pages";


const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Loyout/>}/>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}>
                    <Route path={':id'} element={<CarDetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;