import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsOps";
import { selectFilteredContacts } from "../redux/selectors";
import Contact from "./Contact";
import styles from "../components/ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
