import { createAction } from "@reduxjs/toolkit";

// const fetchContactsRequest = createAction("сontacts/fetchContactsRequest");
// const fetchContactsSuccess = createAction("сontacts/fetchContactsSuccess");
// const fetchContactsError = createAction("сontacts/fetchContactsError");

// const fetchAddContactsRequest = createAction(
//   "сontacts/fetchAddContactsRequest"
// );
// const fetchAddContactsSuccess = createAction(
//   "сontacts/fetchAddContactsSuccess"
// );
// const fetchAddContactsError = createAction("сontacts/fetchAddContactsError");

// const fetchDeleteContactsRequest = createAction(
//   "сontacts/fetchDeleteContactsRequest"
// );
// const fetchDeleteContactsSuccess = createAction(
//   "сontacts/fetchDeleteContactsSuccess"
// );
// const fetchDeleteContactsError = createAction(
//   "сontacts/fetchDeleteContactsError"
// );

const changeFilter = createAction("сontacts/changeFilter");

export default {
  // fetchContactsRequest,
  // fetchContactsSuccess,
  // fetchContactsError,

  // fetchAddContactsRequest,
  // fetchAddContactsSuccess,
  // fetchAddContactsError,

  // fetchDeleteContactsRequest,
  // fetchDeleteContactsSuccess,
  // fetchDeleteContactsError,

  changeFilter,
};
