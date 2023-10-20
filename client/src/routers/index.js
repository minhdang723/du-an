import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from '../pages/DashBoard'
import ListUser from '../pages/ListUser';
const index = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/listuser' element={<ListUser />}></Route>
            </Routes>
        </>
    );
};

export default index;