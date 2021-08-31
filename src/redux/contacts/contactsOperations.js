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
    console.log("fetchAddContacts contact ==> ", contact);
    try {
      const uploadContact = await contactsApi.fetchAddContacts(contact);
      console.log("fetchAddContacts uploadContact  ==>> ", uploadContact);
      return uploadContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  "сontacts/fetchDeleteContactsRequest",
  async (contactId, { rejectWithValue }) => {
    console.log("fetchDeleteContacts contactId  ==>>  ", contactId);

    try {
      await contactsApi.fetchDeleteContacts(contactId);
      return contactId;
    } catch (error) {
      console.log("fetchDeleteContacts error  ==>>  ", error);
      return rejectWithValue(error);
    }
  }
);

export default {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContacts,
};
