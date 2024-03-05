import React from 'react';
import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactSlice';

const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts?.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification message="No contacts" />
      )}
    </div>
  );
};

export default App;
