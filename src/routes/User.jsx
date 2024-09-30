import React from 'react'
import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home"
import UserLayout from '../Layout/UserLayout';

const User = () => {
  return (
    <Routes>
        <Route element={<UserLayout/>}>
            <Route path='/' element={<Home/>}/>
        </Route>
    </Routes>
  )
}

export default User