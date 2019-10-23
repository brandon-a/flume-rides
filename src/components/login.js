import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Formik, Form, Field, ErrorMessage } from "formik";

class Login extends Component{
    render(){
        return(
            <div className="login-body">
                <Grid className="login-grid">
                    <Cell col={12}>
                        <h1>Login</h1>
                        <Formik
                            validate={values => {
                                let errors = {};
                                if (!values.email) {
                                errors.email = "Email Required";
                                } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                errors.email = "Invalid email address";
                                }
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
                                    <div className="input-field">
                                    <label htmlFor="email">Email </label>
                                        <Field type="email" name="email" />                           
                                        <ErrorMessage name="email" component="div" />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="password">Password </label>
                                        <Field type="password" name="password" />
                                        <ErrorMessage name="password" component="div" />
                                    </div>
                                    <div className="input-field">
                                        <button type="Create" disabled={isSubmitting}>
                                            Login
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Login;