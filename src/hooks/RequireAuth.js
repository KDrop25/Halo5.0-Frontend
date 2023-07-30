import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ allowedRoles })=>{
    const {auth} = useAuth();
    const location = useLocation();
    
    return(
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet/>
            : auth?.email
                ? <Navigate to="/unauthorised" state={{from:location}} replace/>
                : <Navigate to="/signin" state={{from:location}} replace />
    );
}


export default RequireAuth;