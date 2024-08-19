import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Theme from "../Theme/Theme";
import { useEffect, useState } from "react";
import css from "./App.module.css";
import { nanoid } from "nanoid";

const savedContact = () => {
  const savedContacts = window.localStorage.getItem("my-contact");
  return savedContacts !== null
    ? JSON.parse(savedContacts)
    : [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
};

export default function App() {
  const [contacts, setContact] = useState(savedContact);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("my-contact", JSON.stringify(contacts));
  }, [contacts]);

  const modeid = nanoid();

  const addContact = (newContact) => {
    setContact((contacts) => {
      return [...contacts, newContact];
    });
  };

  const deletContact = (contactId) => {
    setContact((contacts) => {
      return contacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filtreContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.wrapp}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} id={modeid} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={filtreContact} deletContact={deletContact} />
      <Theme />
    </div>
  );
}
