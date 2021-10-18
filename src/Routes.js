import { Switch, Route } from "react-router";
import { Home, LoginPage, RegisterPage, ProtectedPage } from "./pages";
import { SecureComponent } from "./atoms/SecureComponent";
import * as route from "./constants/routes";

export function Routes() {
  return (
    <Switch>
      <Route path={route.HOME_PATH} exact>
        <Home />
      </Route>

      <Route path={route.LOGIN_PATH}>
        <LoginPage />
      </Route>

      <Route path={route.REGISTER_PATH}>
        <RegisterPage />
      </Route>

      <Route path={route.DOCUMENTATION_PATH}>
        <SecureComponent
          Component={ProtectedPage}
          title="Secure Component example"
        />
      </Route>
    </Switch>
  );
}
