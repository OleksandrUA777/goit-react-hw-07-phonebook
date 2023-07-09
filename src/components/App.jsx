import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/phoneBook/thunk';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { BallTriangle } from 'react-loader-spinner';

import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.contacts);
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        <Form />
      </div>
      <h2>Contacts</h2>

      <Filter />
      {isLoading ? <BallTriangle /> : <ContactList />}
    </>
  );
};
