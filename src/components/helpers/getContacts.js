// 1) fetch
// 2) thunk, який створить getContacts/pending..
//3) Опрацювати getContacts/pending, initstate...
// 4) store

import axios from 'axios';

///contacts
axios.defaults.baseURL = 'https://64a7ef3edca581464b850491.mockapi.io';

export const fetchContacts = async () => {
  const resp = await axios.get('/contacts');

  return await resp.data;
};
export const addContact = async contact => {
  const resp = await axios.post(`/contacts`, contact);
};

export const deleteContact = async id => {
  try {
    const resp = await axios.delete(`/contacts/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error.message);
  }
};
