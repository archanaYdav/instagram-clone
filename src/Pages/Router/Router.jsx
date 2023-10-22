import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Profile from './Profile/Profile';
import Story from './Story/Story';
import Login from "./LoginSignup/Login.jsx";
import Signup from "./LoginSignup/Signup.jsx";

const user = false;

export const Router = () => {
    return (
        <div>
            {user && <div className='flex '>
                <div className='w-[22%] border border-1-slate-500'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<HomePage />}></Route>
                        <Route path='/username' element={<Profile />}></Route>
                        <Route path='/story' element={<Story />}></Route>
                    </Routes>
                </div>
            </div>}

            {!user && <div className='w-full'>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/Signup' element={<Signup />}></Route>
                </Routes>
            </div>}
        </div>
    )
}

export default Router;
