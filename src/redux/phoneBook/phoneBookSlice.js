import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './thunk';

export const contactsSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContactsThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchContactsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchContactsThunk.rejected]: (state, { error }) => {
      console.log('fetchContactsThunk error', error.message);
      state.error = error.message;
      state.isLoading = false;
    },
    [addContactThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContactThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      const namesArr = state.items.map(item => item.name);
      const name = action.meta.arg.name;

      if (namesArr.includes(name)) {
        alert(`${name} is already in your contacts`);
        return;
      }
      state.items.push(action.meta.arg);

      // console.log(current(state.items)); // правильні items
      // console.log(state.items); //undefined
    },
    [addContactThunk.rejected]: (state, { error }) => {
      console.log('addContactThunk error', error.message);
      state.isLoading = false;
      state.error = error.message;
    },
    [deleteContactThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteContactThunk.fulfilled]: (state, action) => {
      const id = action.meta.arg;
      const filteredArr = state.items.filter(item => item.id !== id);

      state.isLoading = false;
      state.items = filteredArr;
      state.error = null;
    },
    [deleteContactThunk.rejected]: (state, { error }) => {
      console.log('addContactThunk error', error.message);
      state.isLoading = false;
      state.error = error.message;
    },
  },
});

export const { addContacts, removeContacts } = contactsSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterUpdate(state, action) {
      return (state = action.payload);
    },
  },
});
export const { filterUpdate } = filterSlice.actions;
