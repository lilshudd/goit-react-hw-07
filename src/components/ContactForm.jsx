import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsOps";
import styles from "../components/ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format (XXX-XX-XX)")
      .min(3, "Phone number must be at least 3 characters")
      .max(50, "Phone number must not exceed 50 characters")
      .required("Phone number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className={styles.inputForm}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="number" className={styles.label}>
              Number:
            </label>
            <Field
              type="text"
              id="number"
              name="number"
              placeholder="Enter your phone number"
              className={styles.inputForm}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.buttonForm}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
