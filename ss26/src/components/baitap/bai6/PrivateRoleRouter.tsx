import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoleRouter() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoleRouter;
