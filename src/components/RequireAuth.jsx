import { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function RequireAuth({ children }) {
    const token = useContext(AuthContext).token;

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
    // children prop represent the components wrapped by the RequireAuth component; refer to App.jsx line 19
}