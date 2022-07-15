import style from './phonebook-app.module.css';
import { getContacts } from 'redux/contacts/contacts-selector';

import { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import actions from 'redux/contacts/contactsActionCreators';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const PhonebookApp = () => {
  const [filter, setFilter] = useState('');

  // const firstRender = useRef(true);

  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts, shallowEqual);
  console.log(contacts);

  const addContact = newData => {
    const { name } = newData;
    if (
      contacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already added!`);
    }

    const action = actions.addContact(newData);
    dispatch(action);
  };

  const deleteContact = id => {
    const action = actions.removeContact(id);
    dispatch(action);
  };

  const filterChange = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredContactsList = () => {
    if (!filter) {
      return contacts;
    }
    const filterQuery = filter.toLowerCase();
    const filteredItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery)
    );
    return filteredItems;
  };

  const filteredContacts = getFilteredContactsList();
  return (
    <div className={style.bookSection}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2 className={style.title}>Contacts</h2>
      <Filter filterChange={filterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default PhonebookApp;

// useEffect(() => {
//   const storedData = JSON.parse(localStorage.getItem('contacts'));
//   if (firstRender.current) {
//     if (storedData.length) {
//       setContacts(storedData);
//     }
//     firstRender.current = false;
//   }
// }, []);

// useEffect(() => {
//   if (!firstRender.current) {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }
// }, [contacts]);
