import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

export function ContactForm() {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    if (
      items.find(
        contact =>
          contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
      )
    ) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }

    dispatch(
      addContactThunk({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.contact_form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={css.contact_form_input}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={css.contact_form_input}
          type="tel"
          name="number"
          // pattern="^[+]?[(]?[0-9]{1,4}[)]?[-s.]?[0-9]{1,4}[-s.]?[0-9]{1,6}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <input
        type="submit"
        className={css.contact_form_buttom}
        value="Add contact"
      />
    </form>
  );
}
