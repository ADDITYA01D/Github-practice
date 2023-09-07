import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice";
import { persistor } from "../features/persistore";
import { clearUser } from "../features/userSlice";
import { useEffect } from "react";



function Logout() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    dispatch(logout());
    dispatch(clearUser());
    persistor.purge();
    useEffect(() => {
        navigate('/');
    },[]);

    
}

export default Logout;