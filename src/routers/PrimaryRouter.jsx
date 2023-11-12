import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../features/login/pages/Login';

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hello world!</h1>} />
                <Route path="/houses" element={<h1>Houses</h1>} />
                <Route path="/chores" element={<h1>Chores</h1>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;