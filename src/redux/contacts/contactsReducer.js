import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actionContacts from "./contactsActions";
import {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContacts,
} from "./contactsOperations";

function checkGetNewContact(state, payload) {
  console.log("checkGetNewContact payload  ==>> ", payload);

  const isEqualName = (payload) => {
    return state.find(({ name }) => name === payload.name);
  };

  if (!isEqualName(payload)) {
    // console.log("items ~ payload ==>  ", payload);
    const newContacts = [payload, ...state];
    return newContacts;
  } else {
    alert(`${payload.name} is already in contacts`);
    return state;
  }
}

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => payload,
  [fetchAddContacts.fulfilled]: (state, { payload }) =>
    checkGetNewContact(state, payload),
  [fetchDeleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actionContacts.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({ items, filter });
