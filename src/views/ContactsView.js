import React from "react";

import Title from "components/Title";
import Filter from "components/Filter";
import ContactForm from "components/ContactForm";
import ContactsList from "components/ContactsList";

const ContactsView = () => (
  <>
    <Title title="Phonebook" />
    <ContactForm />
    <Filter />
    <ContactsList />
  </>
);

export default ContactsView;
