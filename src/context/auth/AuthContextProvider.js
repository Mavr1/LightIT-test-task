import React, { createContext, useState } from 'react';

export const AuthContext = createContext(false);

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState('aa');

  return (
    <AuthContext.Provider isAuth={!!token} setToken={setToken}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
