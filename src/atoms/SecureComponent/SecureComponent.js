import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { HOME_PATH } from '../../constants/routes';
import { AuthContext } from '../../providers/AuthProvider';

export const SecureComponent = ({ Component, ...props }) => {
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? <Component {...props} /> : <Redirect to={HOME_PATH} />;
};
