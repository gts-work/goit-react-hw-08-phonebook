import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";
const contactListUrl = "/contacts";

async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  console.log("fetchContacts ~ data === >>>  ", data);

  return data;
}

async function fetchAddContacts(contact) {
  const { data } = await axios.post("/contacts", contact);
  console.log("fetchAddContacts ~ data === >>>  ", data);

  return data;
}

async function fetchDeleteContacts(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  console.log("fetchDeleteContacts ~ data === >>>  ", data);

  return data;
}

export default { fetchContacts, fetchAddContacts, fetchDeleteContacts };
