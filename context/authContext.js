import { createContext, useContext, useState, useEffect } from 'react';
import checkAuth from '../app/actions/checkAuth';
import { get } from 'http';
// import getCurrentUser from "../app/actions/getCurrentUser"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      const { isAuthenticated, user } = await checkAuth();
      // const currentUser = await getCurrentUser();
      // if (!currentUser) {
      //   console.log("currentUser is null");
      //   return { isAuthenticated: false, user: null };
      // }
      // const { isAuthenticated, user } = currentUser;

    console.log("isAuthenticated:", isAuthenticated); 
    console.log("User: kapya", user); 
      setIsAuthenticated(isAuthenticated);
      setCurrentUser(user);
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
