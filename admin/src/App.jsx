import React from "react";
import SideBar from "./Components/SideBar";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content flex">
        <SideBar />
        <Outlet/>
      </div>
    </div>
  );
};

export default App;
