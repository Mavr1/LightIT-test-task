import React, { createContext, useState } from 'react';

export const initialAuth = { auth: { isAuth: false, name: '' }, setAuth: null };

export const AuthContext = createContext(initialAuth);

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
