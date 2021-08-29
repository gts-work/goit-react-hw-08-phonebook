import { createAsyncThunk } from "@reduxjs/toolkit";
import contactsApi from "services";

// console.log("fetchContactsApi ==>>  ", contactsApi.fetchContacts());

export const fetchContacts = createAsyncThunk(
  "сontacts/fetchContactsRequest",
  async (type, { rejectWithValue }) => {
    console.log("fetchContacts contacts ==>> ");

    try {
      const contacts = await contactsApi.fetchContacts();
      console.log("fetchContacts contacts ==>> ", contacts);
      return contacts;
    } catch (error) {
      console.log("fetchContacts ERROR ==>> ", error);
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

export default {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContacts,
};
