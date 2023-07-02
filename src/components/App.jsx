import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';
import { getContactsThunk } from 'redux/operations';

export const App = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {items.length === 0 ? <span>There are no contacts</span> : <Filter />}
      {isLoading === true && <span>Updating, please wait...</span>}
      <ContactList />
      {error !== null && <span>Oops, please try again</span>}
    </div>
  );
};
