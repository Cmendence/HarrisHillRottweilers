import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./GoogleAuthProvider.jsx";

const ProtectedRoute = () => {
  const { user, isAuthorized } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // User is not authenticated, redirect to Login component
      navigate("/unauth");
    } else if (!isAuthorized) {
      // User is authenticated but not approved, redirect to UnAuth component
      navigate("/unauth");
    }
  }, [user, isAuthorized, navigate]);

  // User is authenticated and approved, render the protected component
  return <Outlet />;
};

export default ProtectedRoute;
