import { LoginForm } from "../../../components/forms/LoginForm";

export const LoginPage = () => {
  return (
    <div className="column">
      <h2 className="title">Login Page</h2>
      <div className="column mb-2">
        <code>"email": "eve.holt@reqres.in", "password": "cityslicka"</code>
      </div>
      <LoginForm />
    </div>
  );
};
