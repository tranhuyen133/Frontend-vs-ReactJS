import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouter() {
    const [isAuthenticated] = useState(false);

  return (
    
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRouter
