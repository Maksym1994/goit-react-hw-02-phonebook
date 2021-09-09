import React from 'react';
import s from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contactItem} key={id}>
          <p className={s.itemName}>Name: {name}</p>
          <p className={s.itemName}>Number: {number}</p>
          <button className={s.deleteBtn} type="button" onClick={() => onDeleteContacts(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
