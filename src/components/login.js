import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';

class Login extends Component{
    state = {
        email: '',
        passsword: ''
    }

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
                                if (!values.password)
                                errors.password = "Password Required";
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                const user = {
                                    name: this.state.name,
                                    passsword: this.state.password
                                };
                                console.log("before axios");
                                axios.post('/api/login', { 
                                    email: this.state.email, 
                                    password: this.state.passsword 
                                }).then(res => {
                                        console.log(res);
                                        //console.log(res.data);
                                }).then(function(data) {
                                    console.log("should redirect next");
                                    window.location.replace(data);
                                });
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