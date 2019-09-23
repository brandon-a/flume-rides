import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

class CreateAccount extends Component{
    render(){
        return(
            <div class="form">
                <h1>
                Welcome to Flume Rides!
                <br />
                Create an Account
                </h1>
                <Formik
                initialValues={{
                    firstName: "First Name",
                    lastName: "Last Name",
                    university: "University",
                    email: "Email",
                    password: "password"
                }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                    errors.email = "Email Required";
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = "Invalid email address";
                    }
                    if (!values.firstName || values.firstName === "First Name")
                    errors.firstName = "First Name Required";
                    if (!values.lastName || values.lastName === "Last Name")
                    errors.lastName = "Last Name Required";
                    if (!values.university || values.university === "University")
                    errors.university = "University Name Required";
                    if (!values.password || values.password === "password")
                    errors.password = "Password Required";
                    else if (
                    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
                        values.password
                    )
                    ) {
                    errors.password =
                        "Password must contain a mininmum of 8 characters, at least one letter, one number, and one special character.";
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
                    <Field type="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                    <Field type="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" />
                    <Field type="university" name="university" />
                    <ErrorMessage name="university" component="div" />
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
        )
    }
}
export default CreateAccount;