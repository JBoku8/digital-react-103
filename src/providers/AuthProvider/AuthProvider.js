import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AUTH_TOKEN } from '../../constants/constants';
import { itemExists, removeItem, saveItem } from '../../helpers/localStorage';
import { DOCUMENTATION_PATH } from '../../constants/routes';

export const AuthContext = React.createContext(null);

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => itemExists(AUTH_TOKEN));
  const history = useHistory();

  const logOut = () => {
    removeItem(AUTH_TOKEN);
    setLoggedIn(false);
  };

  const logIn = token => {
    saveItem(AUTH_TOKEN, token);
    setLoggedIn(true);
    history.replace(DOCUMENTATION_PATH);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        logIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('Auth Context Provider is not defined');
  }
  return value;
};
