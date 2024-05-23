import React, { createContext, useContext, useEffect, useState } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (response) => {
      // Handle successful login here
      setUser(response.profileObj);
    },
    onFailure: () => {
      // Handle login failure here
      console.error("Login failed");
    },
  });

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AppProvider = ({ children }) => (
  <GoogleOAuthProvider
    clientId="470640631535-be1htltvh3uavmgdohsr4h0ocvte36d3.apps.googleusercontent.com
"
  >
    <AuthProvider>{children}</AuthProvider>
  </GoogleOAuthProvider>
);

export default AppProvider;
