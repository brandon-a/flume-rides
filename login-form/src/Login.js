// Default formik login page used as base code
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic = () => (
  <div class="form">
    <h1>Login to Flume Rides</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="Login" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
