import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/AuthSlice/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    dispatch(loginThunk(user))
      .unwrap()
      .then(() => {
        event.target.reset();
      })
      .catch(() => alert(`Incorrect login or password. Try again`));
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Enter Email"
          required
        />
      </label>

      <label>
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="Enter Password"
          required
          minLength="8"
          title="Password's length - min 8 symbols"
        />
      </label>
      <button className={css.btn} type="submit">
        LOGIN
      </button>
    </form>
  );
};
export default LoginForm;
