import './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/reducer';
import { selectContacts } from 'redux/selectors';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onHandleSubmit = e => {
    e.preventDefault();
    const contactName = e.currentTarget.elements.name.value;
    const contactNumber = e.currentTarget.elements.number.value;

    if (contacts.filter(contact => contact.name === contactName).length > 0) {
      window.alert(`${contactName} is already in contacts`);
      return;
    }

    const newContact = {
      name: contactName,
      phone: contactNumber,
    };

    dispatch(addContact(newContact));
    e.currentTarget.reset();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={onHandleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Number
          <input type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
