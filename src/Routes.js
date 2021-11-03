import { Switch, Route } from 'react-router';
import { Home, LoginPage, RegisterPage, ProtectedPage } from './pages';
import { SecureComponent } from './atoms/SecureComponent';
import { Products, TopProducts } from './pages/products';
import * as route from './constants/routes';

const routes = [
  { path: route.HOME_PATH, component: Home, exact: true },
  {
    path: route.PRODUCTS_PATH,
    component: Products,
    routes: [
      {
        path: route.TOP_PRODUCTS_PATH,
        component: TopProducts,
      },
    ],
  },
  {
    path: route.LOGIN_PATH,
    component: LoginPage,
  },
  {
    path: route.REGISTER_PATH,
    component: RegisterPage,
  },
];

export const RouteWithSubRoutes = ({ route }) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

export function Routes() {
  return (
    <Switch>
      <Route path={route.DOCUMENTATION_PATH}>
        <SecureComponent
          Component={ProtectedPage}
          title="Secure Component example"
        />
      </Route>

      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={i} route={route} {...route} />;
      })}
    </Switch>
  );
}
