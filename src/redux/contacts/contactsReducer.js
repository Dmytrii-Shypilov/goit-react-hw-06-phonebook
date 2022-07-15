import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './contactsActionCreators';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

export const contactsReducer = createReducer(initialState, {
  [addContact.type]: (store, { payload }) => [...store, payload],
  [removeContact.type]: (store, { payload }) =>
    store.filter(contact => contact.id !== payload),
});

