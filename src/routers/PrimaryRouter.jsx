import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function PrimaryRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hello world!</h1>} />
                <Route path="/houses" element={<h1>Houses</h1>} />
                <Route path="/chores" element={<h1>Chores</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default PrimaryRouter;