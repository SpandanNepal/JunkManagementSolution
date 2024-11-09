import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext<any>(null);

type UserProviderProps = {
  children: React.ReactNode; 
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use user context
const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };