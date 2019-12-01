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
                               
                                
                                this.setState({email: values.email});
                                this.setState({password: values.password});

                                return errors;

                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log("before axios");
                                // create account
                                // const user = {
                                //     email: this.state.email,
                                //     password: this.state.password
                                // };
                                // console.log('INSIDE ONSUBMIT BEFORE POST');
                                // axios.post('/api/login', { user })
                                //     .then(res => {
                                //         console.log(res);
                                //     if(res.data.redirect === '/profile') {
                                //         window.location = "/profile"
                                //     } else if (res.data.redirect === 'login'){
                                //         window.location = "/login"
                                //     }
                                //     });
                                // create account
                       
                                axios.post('/api/login', { 
                                    email: this.state.email, 
                                    password: this.state.password 
                                }).then(function (response) {
                                    console.log('login respond: ' + response.data.redirect);
                                    if(response.data.redirect === '/profile') {
                                        window.location = "/profile"
                                    } else if (response.data.redirect === '/login'){
                                        window.location = "/login"
                                    }
                                })
                                .catch(function(error) {
                                    console.log(error);
                                    //window.location = "/login"
                                });
                                setTimeout(() => {
                                //alert(JSON.stringify(values, null, 2));
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