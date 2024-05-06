
/* 
Any to Any Component Communication using Context API

  Step 1. Create Context using createContext()
  Step 2: We have to Provide the context data to the desired components using Context Provider.
  Step 3: Let's supply the data through the CartProvider
  Step 4: You can subcribe to the context data in the desired component using useContext()
  Step 5: Work on to supply the data to the context.
*/

import { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextProps {
  isAuthenticated: boolean; // Needed for the entire app. Particularly in ProtectedRoutes
  saveToken: (token: string, role: string) => void; // Needed for LoginPage
  logout: () => void; // Needed for MenuList
  role: string | undefined; // Needed for Authorization
}
  

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Step 2: Let's create a new component called AuthProvider
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
  }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
      // check for authToken in localStorage
      // if found return true
      // otherwise return false
      
      if(localStorage.getItem("authToken")){
        return true;
      }else{
        return false;
      }
    });
  
    const [role, setRole] = useState('USER');
    console.log(role);
  
    // save JWT token
    const saveToken = (token: string, role: string) => {
      console.log("Saving Token through AuthProvider");
      localStorage.setItem("authToken", token);
      setIsAuthenticated(true);
      
      localStorage.setItem("role", role); // SUPER_ADMIN
      setRole(role);
    };
  
    const logout = () => {
      localStorage.removeItem("authToken");
      setIsAuthenticated(false);
    }
  
    return (
      <AuthContext.Provider
        value={{
          saveToken,
          isAuthenticated,
          logout,
          role
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  // This Custom hook will let you access all auth context data
  export const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error(
        "useAuth hook must be used within AuthProvider component's descendants"
      );
    }
  
    return context;
  };