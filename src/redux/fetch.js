import axios from 'axios';

export const getAllContacts = async () => {
  const { data } = await axios.get(
    'https://64a0999aed3c41bdd7a7606a.mockapi.io/contacts'
  );
  return data;
};

export const addContact = async value => {
  const { data } = await axios.post(
    'https://64a0999aed3c41bdd7a7606a.mockapi.io/contacts',
    value
  );

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://64a0999aed3c41bdd7a7606a.mockapi.io/contacts/${id}`
  );
  return data;
};
