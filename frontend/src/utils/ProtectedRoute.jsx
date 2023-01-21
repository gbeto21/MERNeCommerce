import React from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const location = useLocation()
  const path = location.pathname.substring(1)

  if (!userInfo) {
    return <Navigate to={`/login?redirect=${path}`} replace />
  }

  return children
}

export default ProtectedRoute
