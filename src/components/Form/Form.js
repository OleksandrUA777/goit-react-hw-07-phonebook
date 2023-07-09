import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContactThunk } from 'redux/phoneBook/thunk';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setName('');
    setPhone('');
  };
  const inputChangeHandler = event => {
    const name = event.currentTarget.name;
    const text = event.currentTarget.value;

    if (name === 'name') {
      setName(text);
    } else if (name === 'phone') {
      setPhone(text);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    addContact(name, phone);
    resetForm();
  };
  const dispatch = useDispatch();
  const addContact = (name, phone) => {
    const contact = {
      name,
      phone,
      id: nanoid(),
    };
    dispatch(addContactThunk(contact));
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={inputChangeHandler}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="phone">
        Number
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={inputChangeHandler}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button>Add contact</button>
    </form>
  );
};
