import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, deletContact }) {
  return (
    <div className={css.wrapp}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deletContact={deletContact}
        />
      ))}
    </div>
  );
}
