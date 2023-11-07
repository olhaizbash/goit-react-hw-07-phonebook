import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://654a26cee182221f8d529d74.mockapi.io',
});

export const requestFetchContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};
export const requestAddContact = async newContact => {
  const { data } = await contactsInstance.post('/contacts', newContact);
  return data;
};
export const requestDeleteContacts = async contactId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
  return data;
};
