import { useHistory } from "react-router-dom";
import { EmailInput } from "../../atoms/EmailInput";
import { PasswordInput } from "../../atoms/PasswordInput";
import { DOCUMENTATION_PATH } from "../../constants/routes";

export const LoginForm = () => {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    for (let [inputName, value] of fd.entries()) {
      loginData[inputName] = value;
    }

    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.token) {
          history.replace(DOCUMENTATION_PATH);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={onSubmit}>
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
