import React from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactSlice';
import { selectFilter } from '../../redux/filterSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const filterLowCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowCase)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          {name} : {phone}
          <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
