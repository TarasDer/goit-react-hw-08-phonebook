import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactsReduser } from './constactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterSlice.reducer,
  },
});
