import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1D3461;
  }
`;

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
                        <h1 style={{ fontFamily: 'Oxygen'}}>Login</h1>
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
                                    <BUTTON variant="primary" type="Create" disabled={isSubmitting}>
                                        Login
                                    </BUTTON>
                                    </Col>
                                  </Form.Group>
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