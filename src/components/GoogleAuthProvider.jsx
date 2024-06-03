import { createContext, useContext, useState } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const approvedEmails = ["chris.mendence@gmail.com"]; // List of approved emails

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const fetchUserProfile = async (accessToken) => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const profile = await response.json();
      return profile;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const profile = await fetchUserProfile(response.access_token);
      if (profile && approvedEmails.includes(profile.email)) {
        setUser(profile); // Set user profile and authorized status if email is approved
        setIsAuthorized(true);
      } else {
        setUser(profile); // Set user profile even if not authorized
        setIsAuthorized(false);
      }
    },
    onFailure: () => {
      console.error("Login failed");
      setUser(null); // Clear user profile on failure
      setIsAuthorized(false);
    },
  });

  const logout = () => {
    setUser(null); // Clear user profile on logout
    setIsAuthorized(false); // Clear authorization status on logout
  };

  return (
    <AuthContext.Provider value={{ user, isAuthorized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AppProvider = ({ children }) => (
  <GoogleOAuthProvider clientId="470640631535-be1htltvh3uavmgdohsr4h0ocvte36d3.apps.googleusercontent.com">
    {" "}
    {/* Replace with your actual Google Client ID */}
    <AuthProvider>{children}</AuthProvider>
  </GoogleOAuthProvider>
);

export default AppProvider;
