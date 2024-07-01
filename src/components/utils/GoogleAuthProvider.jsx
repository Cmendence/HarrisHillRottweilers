


import { createContext, useContext, useState, useEffect } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { auth } from "../../firebase.js"
import {
  onAuthStateChanged,
  signInWithCredential,
  GoogleAuthProvider as FirebaseGoogleAuthProvider,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const approvedEmails = ["chris.mendence@gmail.com", "menuhki@gmail.com"]; // List of approved emails

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
      // Set persistence
      await setPersistence(auth, browserLocalPersistence);

      const credential = FirebaseGoogleAuthProvider.credential(null, response.access_token);
      await signInWithCredential(auth, credential);
      const profile = await fetchUserProfile(response.access_token);
      if (profile && approvedEmails.includes(profile.email)) {
        setUser(profile);
        setIsAuthorized(true);
      } else {
        setUser(profile);
        setIsAuthorized(false);
      }
    },
    onFailure: () => {
      console.error("Login failed");
      setUser(null);
      setIsAuthorized(false);
    },
  });

  const logout = () => {
    auth.signOut();
    setUser(null);
    setIsAuthorized(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userProfile = {
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL, // Ensure photoURL is extracted
        };
        setUser(userProfile);
        setIsAuthorized(approvedEmails.includes(firebaseUser.email));
      } else {
        setUser(null);
        setIsAuthorized(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthorized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AppProvider = ({ children }) => (
  <GoogleOAuthProvider clientId="470640631535-be1htltvh3uavmgdohsr4h0ocvte36d3.apps.googleusercontent.com">
    <AuthProvider>{children}</AuthProvider>
  </GoogleOAuthProvider>
);

export default AppProvider;
