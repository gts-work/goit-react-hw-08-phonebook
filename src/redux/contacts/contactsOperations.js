import { createAsyncThunk } from "@reduxjs/toolkit";
import contactsAction from "./contactsActions";
import contactsApi from "services";

console.log("fetchContactsApi ==>>  ", contactsApi.fetchContacts());

export const fetchContacts = createAsyncThunk(
  "сontacts/fetchContactsRequest",
  async (type, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAddContacts = createAsyncThunk(
  "сontacts/fetchAddContactsRequest",
  async (contact, { rejectWithValue }) => {
    try {
      await contactsApi.fetchAddContacts(contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  "сontacts/fetchDeleteContactsRequest",
  async (contactId, { rejectWithValue }) => {
    try {
      await contactsApi.fetchDeleteContacts(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// const fetchContacts = () => async (dispath) => {
//     dispath(contactsAction.fetchContactsRequest());

//     try {
//         const contacts = await contactsApi.fetchContacts();
//         console.log("fetchContacts ~ contacts  === >>>   ", contacts);
//         dispath(contactsAction.fetchContactsSuccess(contacts));
//     } catch (error) {
//         console.log("fetchContacts ~ error  ==>>  ", error);
//         dispath(contactsAction.fetchContactsError(error));
//     }
// };

// const fetchAddContacts = (contact) => async (dispath) => {
//     console.log("fetchAddContacts ~ contact ===>>>   ", contact.text);

//     dispath(contactsAction.fetchAddContactsRequest());

//     try {
//         await contactsApi.fetchAddContacts(contact);
//         dispath(contactsAction.fetchAddContactsSuccess(contact));
//     } catch (error) {
//         console.log("fetchContacts ~ error  ==>>  ", error);
//         dispath(contactsAction.fetchAddContactsError(error));
//     }
// };

// const fetchDeleteContacts = (contactId) => async (dispath) => {
//     console.log("fetchDeleteContacts ~ contactId ===>>>   ", contactId);

//     dispath(contactsAction.fetchDeleteContactsRequest());

//     try {
//         await contactsApi.fetchDeleteContacts(contactId);
//         dispath(contactsAction.fetchDeleteContactsSuccess(contactId));
//     } catch (error) {
//         console.log("fetchContacts ~ error  ==>>  ", error);
//         dispath(contactsAction.fetchDeleteContactsError(error));
//     }
// };

export default {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContacts,
};
