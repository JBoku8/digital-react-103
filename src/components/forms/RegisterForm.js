import { EmailInput } from '../../atoms/EmailInput';
import { PasswordInput } from '../../atoms/PasswordInput';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  //   useEffect(() => {
  //     console.log("ყოველთვის ამოქმედებული");
  //   });

  const onSubmit = event => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    for (let [inputName, value] of fd.entries()) {
      loginData[inputName] = value;
    }

    console.log(loginData);

    // AJAX
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className={css.title}>Style TItle</h2>

      <div className="field">
        <EmailInput name="userEmail" />
      </div>
      <div className="field">
        <PasswordInput name="userPassword" />
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
