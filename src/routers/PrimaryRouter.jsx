import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../features/login/pages/Login';
import MyHouse from '../features/myHouses/pages/MyHouses';

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hello world!</h1>} />
                <Route path="/myhouses" element={<MyHouse />} />
                <Route path="/chores" element={<h1>Chores</h1>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;