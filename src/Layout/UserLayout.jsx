import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Bottom from "../components/Bottom";

const UserLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Bottom/>
    </>
  )
}

export default UserLayout