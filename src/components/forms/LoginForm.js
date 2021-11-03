import { useContext } from 'react';
import { EmailInput } from '../../atoms/EmailInput';
import { PasswordInput } from '../../atoms/PasswordInput';
import { AuthContext } from '../../providers/AuthProvider';
import { loginAsync } from '../../services/auth.service';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const { logIn } = useContext(AuthContext);

  const onSubmit = async event => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    for (let [inputName, value] of fd.entries()) {
      loginData[inputName] = value;
    }

    const result = await loginAsync(loginData);
    logIn(result.token);
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
