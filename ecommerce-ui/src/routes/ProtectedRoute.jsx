import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {

    const user = useSelector((state)=>state.user.currentUser)
    if(!user){
        return <Navigate to="/login" replace />
    }
    return children
}

export default ProtectedRoute
