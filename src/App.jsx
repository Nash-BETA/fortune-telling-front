import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// routes
import ROUTES from './routes';

import Home from './containers/Home';
import FortuneTellerDetail from './containers/FortuneTellerDetail';


export default function App() {
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <h1>Hello React Router v6</h1>
                    <Routes>
                        <Route path={ROUTES.home} element={<Home />} />
                        <Route path={ROUTES.fortuneTellerDetail}
                               render={({ match }) => {
                                   const fortuneTellerId = Number(match.params.fortune_teller_id);
                                   return (
                                       <FortuneTellerDetail
                                           fortuneTellerId={fortuneTellerId}
                                       />
                                   );
                               }}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}
