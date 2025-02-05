import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';

class CreateAccount extends Component{
    state = {
        name: '',
        email: '',
        school: '',
        passsword: '',
        phone: '',
        car: '',
        major: ''
    }

    render(){
        return(
            <div className="createaccount-body">
                <Grid className="createaccount-grid">
                    <Formik
                    // initialValues={{
                    //     firstName: "First Name",
                    //     lastName: "Last Name",
                    //     university: "University",
                    //     email: "Email",
                    //     password: "password"
                    // }}
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
                        this.setState({name: values.firstName + ' ' + values.lastName});
                        this.setState({email: values.email});
                        this.setState({school: values.university});
                        this.setState({phone: values.phone});
                        this.setState({car: values.car});
                        this.setState({major: values.major});
                        this.setState({password: values.password});
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        const user = {
                            name: this.state.name,
                            email: this.state.email,
                            school: this.state.school,
                            phone: this.state.phone,
                            car: this.state.car,
                            major: this.state.major,
                            password: this.state.password
                        };
                        console.log('INSIDE ONSUBMIT BEFORE POST');
                        axios.post('/api/signup', { user })
                            .then(function (res) {
                                if(res.data.redirect === '/login') {
                                    window.location = "/login"
                                } else if (res.data.redirect === '/createaccount'){
                                    window.location = "/createaccount"
                                }
                            });
                        setTimeout(() => {
                        //alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Cell col={12}>
                            <h1>
                                Welcome to Flume Rides!
                                <br />
                                Create an Account
                            </h1>
                        <Form>
                            <div className="input-field">
                            <label htmlFor="firstName">First Name </label>
                                <Field type="firstName" name="firstName" />                           
                                <ErrorMessage name="firstName" component="div" />
                            </div>
                            <div className="input-field">
                                <label htmlFor="lastName">Last Name </label>
                                <Field type="lastName" name="lastName" />
                                <ErrorMessage name="lastName" component="div" />
                            </div>
                            <div className="input-field">
                                <label htmlFor="university">University </label>
                                <Field type="university" name="university" />                                
                                <ErrorMessage name="university" component="div" />
                            </div>
                            <div className="input-field">
                                <label htmlFor="phone">Phone </label>
                                <Field type="phone" name="phone" />                                
                                <ErrorMessage name="phone" component="div" />
                            </div>
                            <div className="input-field">
                                <label htmlFor="car">Car </label>
                                <Field type="car" name="car" />                                
                                <ErrorMessage name="car" component="div" />
                            </div>
                            <div className="input-field">
                                <label htmlFor="major">Major </label>
                                <Field type="major" name="major" />                                
                                <ErrorMessage name="major" component="div" />
                            </div>
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
                                <button type="Login" disabled={isSubmitting}>
                                    Login
                                </button>
                            </div>
                        </Form>
                        </Cell>
                    )}
                    </Formik>
                </Grid>
            </div>
        )
    }
}
export default CreateAccount;