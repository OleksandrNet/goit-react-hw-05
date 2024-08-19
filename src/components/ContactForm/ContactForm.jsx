import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Мінімум 3 символи!")
    .max(50, "Мінімум 50 символів!")
    .required("Це обов'язкове поле!"),
  number: Yup.string()
    .matches(/^(\+?[0-9\s-]{3,})$/, "Невірний формат номера!")
    .required("Це обов'язкове поле!"),
});

export default function ContactForm({ addContact, id }) {
  const handleSubmit = (values, actions) => {
    addContact({
      name: values.name,
      number: values.number,
      id: id,
    });
    actions.resetForm();
  };
  return (
    <div className={css.wrapp}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <label className={css.text}>Name</label>
            <Field
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <label className={css.text}>Number</label>
            <Field
              type="text"
              name="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
            />
            {errors.number && touched.number && errors.number}
            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
