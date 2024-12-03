import React, { useContext, useState } from 'react'
import NavBar from './Components/NavBar'
import { Outlet } from 'react-router-dom'
import StoreContextProvider, { StoreContext } from './Context/StoreContext'
import Footer from './Components/Footer'
import LogInPopUp from './Components/LogInPopUp';

const App = () => {

    const [showLogin,setShowLogin] = useState(false);
    const [token,setToken] = useState("");
    

    return (
      <>
        {showLogin ? <LogInPopUp setShowLogin={setShowLogin} setToken={setToken}/> : <></>} {/* Conditional rendering fixed here */}
        <div className="w-4/5 m-auto">
          <StoreContextProvider setToken={setToken} token={token}>
            <NavBar setShowLogin={setShowLogin} showLogin={showLogin} setToken={setToken} token={token}/>
            <Outlet/>
            <Footer />
          </StoreContextProvider>
        </div>
      </>
    );
};


export default App