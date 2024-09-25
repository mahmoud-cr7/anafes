// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Create the context
interface AuthContextType {
  loggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
