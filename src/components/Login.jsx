import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/utils/GoogleAuthProvider.jsx";
import GoogleLogo from "../assets/icons/google-logo-transparent.png";

const Login = () => {
  const { user, isAuthorized, login, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && isAuthorized) {
      navigate("/admin/dashboard"); // Navigate to dashboard if authorized
    } else if (user && !isAuthorized) {
      navigate("/unauth"); // Navigate to UnAuth if not authorized
    }
  }, [user, isAuthorized, navigate]);

  return (
    <div className="flex flex-col items-center m-8 h-full">
      <h1 className="font-semibold text-4xl text-gray-800">Admin Login</h1>
      <button
        className="bg-rose-900 rounded border-2 border-rose-900 hover:bg-rose-950 hover:border-rose-950 active:shadow-sm text-slate-100 lg:text-3xl text-xl font-semibold shadow-md shadow-black m-10 lg:px-6 px-4 py-1 flex items-center"
        onClick={login}
      >
        Login with{" "}
        <img className="lg:w-36 w-20 mt-2" src={GoogleLogo} alt="Google Logo" />
      </button>
    </div>
  );
};

export default Login;
