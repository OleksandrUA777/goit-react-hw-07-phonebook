// 1) fetch
// 2) thunk, який створить getContacts/pending..
// 3) dispatch(functionThunk())
//4) Опрацювати getContacts/pending, initstate...

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'components/helpers/getContacts';

// 4) store
export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    //те що return => action
    return await fetchContacts();
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    return await addContact(contact);
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContact(id);
  }
);
