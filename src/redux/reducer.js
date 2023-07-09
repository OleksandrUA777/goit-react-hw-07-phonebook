import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from './phoneBook/phoneBookSlice';

export const reducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});
