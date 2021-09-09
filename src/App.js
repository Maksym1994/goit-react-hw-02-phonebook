import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { v4 as uuidv4 } from 'uuid';
import s from 'App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = e => {
    if (this.state.contacts.some(contact => contact.name === e.name)) {
      alert(`${e.name} is already in contacts.`);
      return;
    }
    const NewContact = {
      name: e.name,
      number: e.number,
      id: uuidv4(),
    };

    this.setState(prevState => ({
      contacts: [NewContact, ...prevState.contacts],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    const { handleSubmit, handleChange, handleDeleteContact, getFilteredContacts, changeFilter } =
      this;
    return (
      <div>
        <h2 className={s.title}>Phonebook</h2>
        <ContactForm onSubmit={handleSubmit} name={name} number={number} onChange={handleChange} />
        {contacts.length > 1 && <Filter filter={filter} onChange={changeFilter} />}
        <h2 className={s.title}>Contacts</h2>
        <ContactList contacts={getFilteredContacts()} onDeleteContacts={handleDeleteContact} />
      </div>
    );
  }
}

export default App;
