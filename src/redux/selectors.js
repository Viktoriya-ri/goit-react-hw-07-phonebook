import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items; // масив з контактами
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter], // масив селекторів
  (contacts, filter) => {

     return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);


