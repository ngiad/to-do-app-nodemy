import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("auth"))?.jwt) navigate("/login");
  }, [window.location.pathname]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Private;
