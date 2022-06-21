import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', data => {
  const newContact = { ...data, id: nanoid() };
  return { payload: newContact };
});

export const removeContact = createAction('contacts/remove');

 const actions = {
  addContact,
  removeContact,
};

export default actions


