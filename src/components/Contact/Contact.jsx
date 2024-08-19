import css from "./Contact.module.css";

export default function Contact({
  contact: { id, name, number },
  deletContact,
}) {
  return (
    <div className={css.wrapp}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="submit" onClick={() => deletContact(id)}>
        Delete
      </button>
    </div>
  );
}
