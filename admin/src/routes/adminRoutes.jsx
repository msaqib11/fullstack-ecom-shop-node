import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminRoutes = ({ children }) => {
      const isAdmin = useSelector((state) => state.user?.currentUser?.isAdmin)
    if (!isAdmin) {
        return <Navigate to="/login" replace />
    }
    return children
}

export default AdminRoutes