import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import CreateAcc from './Pages/CreateAcc'
import UserHome from './Pages/UserHome'


export default function LinkRouters() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createacc" element={<CreateAcc />} />
                <Route path="/userPage" element={<UserHome />} />
            </Routes>
        </Router>
    )
}
