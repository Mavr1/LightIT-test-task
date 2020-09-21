import React, { createContext, useState } from 'react';

export const AuthContext = createContext(false);

const AuthContextProvider = () => {
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider isAuth={!!token} setToken={setToken}>
      {this.props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
