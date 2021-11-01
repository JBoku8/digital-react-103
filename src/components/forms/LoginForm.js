import { useContext } from 'react';
import { EmailInput } from '../../atoms/EmailInput';
import { PasswordInput } from '../../atoms/PasswordInput';
import { AuthContext } from '../../providers/AuthProvider';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const { logIn } = useContext(AuthContext);

  const onSubmit = event => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    for (let [inputName, value] of fd.entries()) {
      loginData[inputName] = value;
    }

    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(result => {
        if (result.token) {
          logIn(result.token);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className={styles.title}>Style TItle</h2>
      <div className="field">
        <EmailInput name="email" />
      </div>
      <div className="field">
        <PasswordInput name="password" />
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success" type="submit">
            Login
          </button>
        </p>
      </div>
    </form>
  );
};
