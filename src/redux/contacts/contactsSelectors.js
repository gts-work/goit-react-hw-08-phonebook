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

    // console.log(
    //     "getVisibleContacts ~ getAllContacts ==>  ",
    //     getAllContacts
    // );

    return getAllContacts;
  }
);

export default {
  getContactsItems,
  getContactsFilter,
  getVisibleContacts,
};

// const getVisibleContacts = (state) => {
//     const allContacts = getContactsItems(state);
//     const filter = getContactsFilter(state);

//     const normalizedFilter = filter.toLowerCase();

//     const getAllContacts = allContacts.filter(({ name }) =>
//         name.toLowerCase().includes(normalizedFilter)
//     );

//     console.log("getVisibleContacts ~ getAllContacts ==>  ", getAllContacts);

//     return getAllContacts;
// };
