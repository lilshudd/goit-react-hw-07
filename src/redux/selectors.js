import { createSelector } from "reselect";

const selectContactsState = (state) => state.contacts;
const selectFiltersState = (state) => state.filters;

export const selectContacts = createSelector(
  [selectContactsState],
  (contactsState) => contactsState.items
);

export const selectContactsLoading = createSelector(
  [selectContactsState],
  (contactsState) => contactsState.loading
);

export const selectContactsError = createSelector(
  [selectContactsState],
  (contactsState) => contactsState.error
);

export const selectNameFilter = createSelector(
  [selectFiltersState],
  (filtersState) => filtersState.name
);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
