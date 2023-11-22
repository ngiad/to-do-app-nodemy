import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("auth"))?.jwt) navigate("/login");
  }, [window.location.pathname]);
  return (
    <div>
      <Outlet />
      <div>
        <p style={{textAlign : "center"}}>@ by : tran dai nghia</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Private;
