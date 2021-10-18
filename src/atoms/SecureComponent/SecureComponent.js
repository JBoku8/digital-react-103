import { Redirect } from "react-router-dom";
import { HOME_PATH } from "../../constants/routes";

export const SecureComponent = ({ Component, ...props }) => {
  const loggedIn = true;

  return loggedIn ? <Component {...props} /> : <Redirect to={HOME_PATH} />;
};
