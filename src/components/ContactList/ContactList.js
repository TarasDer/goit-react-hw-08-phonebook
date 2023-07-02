import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContactThunk } from 'redux/operations';
import css from './ContactList.module.css';

export function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const { items } = useSelector(getContacts);

  const filterContact = () => {
    return items.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const contacts = filterContact();

  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contact_name} key={id}>
            {name} :<span className={css.contact_number}>{number}</span>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContactThunk(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
