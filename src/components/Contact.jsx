import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsOps";
import styles from "../components/Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contact}>
      <p>Name: {name}</p>
      {number && <p>Number: {number}</p>}
      <button className={styles.button} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  }).isRequired,
};

export default Contact;
