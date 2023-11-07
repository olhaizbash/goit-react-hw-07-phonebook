import css from './ContactList.module.css';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/reducer';
import { useEffect } from 'react';
import { Loader } from 'components/Loader';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
  });
  return (
    <ul>
      {isLoading && <Loader />}
      {error && <div>Sorry, there are no contacts in your phonebook</div>}
      {contacts !== null &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: <span>{number}</span>
              <button
                className={css.button}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
