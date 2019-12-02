import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Col, Button, Row } from 'react-bootstrap';
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';
import styled from 'styled-components';

const CONTAINER = styled.div`
  background: #bdc3c7;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media(min-width: 786px) {
    width: 60%;
  }

  label {
    color: #24B9B6;
    font-size: 1.2em;
    font-weight: 400;
  }

  h1 {
    color: #24B9B6;
    padding-top: .5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }

  .error {
    border: 2px solid #FF6565;
  }

  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }
`;


const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1D3461;
  }
`;

class CreateAccount extends Component{
    state = {
        name: '',
        email: '',
        school: '',
        passsword: ''
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
                        this.setState({password: values.password});
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        const user = {
                            name: this.state.name,
                            email: this.state.email,
                            school: this.state.school,
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
                            <h1 style={{ fontFamily: 'Oxygen'}}>
                                Welcome to Flume Rides!
                                <br />
                                Create an Account
                            </h1>
                        <Form>
                            <Form.Group>
                              <Form.Label column sm={2}>
                                First Name 
                              </Form.Label>
                              <Field type="firstName" name="firstName" />                           
                              <ErrorMessage name="firstName" component="div" />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label column sm={2}>Last Name </Form.Label>
                                <Field type="lastName" name="lastName" />
                                <ErrorMessage name="lastName" component="div" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={2}>University </Form.Label>
                                <Field type="university" name="university" />                                
                                <ErrorMessage name="university" component="div" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={2}>Email </Form.Label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label column sm={2}>Password </Form.Label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" />
                            </Form.Group>
                            <Form.Group as={Row}>
                              <Col sm={{ span: 10, offset: 2 }}>
                                <BUTTON variant="primary" type="Login" disabled={isSubmitting}>
                                    Login
                                </BUTTON>
                                </Col>
                            </Form.Group>
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