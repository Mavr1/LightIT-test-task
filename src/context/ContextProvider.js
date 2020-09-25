import React, { createContext, useState } from 'react';

export const initialContext = {
  isAuth: false,
  name: '',
  products: [],
};

export const Context = createContext(initialContext);

export const ContextProvider = ({ children }) => {
  const [context, setContext] = useState(initialContext);

  return (
    <Context.Provider value={{ context, setContext }}>
      {children}
    </Context.Provider>
  );
};
