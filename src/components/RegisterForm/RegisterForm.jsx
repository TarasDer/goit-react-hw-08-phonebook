import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/AuthSlice/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    dispatch(registerThunk(newUser))
      .unwrap()
      .then(() => {
        event.target.reset();
      })
      .catch(() => alert(`Incorrect login or password. Try again`));
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
          pattern="^[a-zA-Z]+\s[a-zA-Z]+$"
          title="Username must be two words separated by space."
        />
      </label>

      <label className={css.label}>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Enter Email"
          required
        />
      </label>

      <label className={css.label}>
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
        Sign up
      </button>
    </form>
  );
};
export default RegisterForm;
