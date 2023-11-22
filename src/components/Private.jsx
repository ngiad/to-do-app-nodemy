import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CiLogout } from "react-icons/ci";

const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("auth"))?.jwt) navigate("/login");
  }, [window.location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("auth")
    navigate("/")
  }
  return (
    <div>
      <button onClick={handleLogout} style={{position : "fixed", left : "0px", top : "140px",cursor : "pointer"}}><CiLogout style={{fontSize : "30px"}} /></button>
      <Outlet />
      <div>
        <p style={{textAlign : "center"}}>@ by : tran dai nghia</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Private;
