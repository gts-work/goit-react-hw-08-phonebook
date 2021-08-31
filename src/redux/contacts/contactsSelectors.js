import { createSelector } from "@reduxjs/toolkit";

const getContactsItems = (state) => state.contacts.items;
const getContactsFilter = (state) => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContactsItems, getContactsFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    const getAllContacts = allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return getAllContacts;
  }
);

export default {
  getContactsItems,
  getContactsFilter,
  getVisibleContacts,
};
