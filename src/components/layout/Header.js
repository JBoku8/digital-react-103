import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as route from '../../constants/routes';
import { useAuthContext } from '../../providers/AuthProvider';

export function Header() {
  const { loggedIn, logOut } = useAuthContext();

  useEffect(() => {
    console.log('HEADER RENDERING');
  }, [loggedIn]);

  const renderGuestLinks = () => {
    return (
      <div className="buttons">
        <NavLink className="button is-primary" to={route.REGISTER_PATH}>
          <strong>Register</strong>
        </NavLink>
        <NavLink className="button is-light" to={route.LOGIN_PATH}>
          Log in
        </NavLink>
      </div>
    );
  };
  const renderUserLinks = () => {
    return (
      <div className="buttons">
        <button className="button is-primary" onClick={logOut}>
          <strong>Log Out</strong>
        </button>
      </div>
    );
  };

  return (
    <div className="columns mb-3">
      <div className="column is-full">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to={route.HOME_PATH}>
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt=""
              />
            </Link>

            <Link
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              to={route.HOME_PATH}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <NavLink
                className="navbar-item"
                to={route.HOME_PATH}
                activeClassName="has-background-light"
                exact
              >
                Home
              </NavLink>

              <NavLink
                className="navbar-item"
                to={route.DOCUMENTATION_PATH}
                activeClassName="has-background-light"
              >
                Protected Page
              </NavLink>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                {loggedIn ? renderUserLinks() : renderGuestLinks()}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
