import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CONTAINER = styled.div`
  background: #F7F9FA;
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

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media(min-width: 786px) {
    width: 50%;
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

// RegEx for validation
const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

// Schema for yup
const validationSchema = Yup.object().shape({
  fName: Yup.string()
  .min(2, "*fNames must have at least 2 characters")
  .max(100, "*fNames can't be longer than 100 characters")
  .required("*fName is required"),
  lName: Yup.string()
  .min(2, "*lNames must have at least 2 characters")
  .max(100, "*lNames can't be longer than 100 characters")
  .required("*lName is required"),
  university: Yup.string()
  .min(2, "*University must have at least 2 characters")
  .max(100, "*University can't be longer than 100 characters")
  .required("*Univerity is required"),
  email: Yup.string()
  .email("*Must be a valid email address")
  .max(100, "*Email must be less than 100 characters")
  .required("*Email is required"),
  password: Yup.string()
  .matches(passwordReg, "*Must be a valid password")
  .max(100, "*Password must be less than 100 characters")
  .required("*Password is required"),
});
class CreateAccount extends Component{
  state = {
      name: '',
      email: '',
      school: '',
      passsword: ''
  }

  render(){
    return(
    <CONTAINER>
      //Sets initial values for form inputs
      <Formik
        initialValues={{ name:"", lname:"", university:"", email:"", password:""}}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            // When button submits form and form is in the process of submitting, submit button is disabled
            setSubmitting(true);

            // Simulate submitting to database, shows us values submitted, resets form
            const user = {
              name: this.state.name,
              email: this.state.email,
              school: this.state.school,
              passsword: this.state.password
            };
            console.log('INSIDE ONSUBMIT BEFORE POST');
            axios.post('/new_user', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {/* Callback function containing Formik state and helpers that handle common form actions */}
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
        <MYFORM onSubmit={handleSubmit} className="mx-auto">
          {console.log(values)}
          <Form.Group controlId="formfName">
            <Form.Label>First Name :</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="first name"
              placeholder="First Name"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.fName}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              className={touched.fName && errors.fName ? "error" : null}
              />
              {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
              {touched.fName && errors.fName ? (
                <div className="error-message">{errors.fName}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formlName">
            <Form.Label>Last Name :</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="Last name"
              placeholder="Last Name"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.lName}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              className={touched.lName && errors.lName ? "error" : null}
              />
              {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
              {touched.lName && errors.lName ? (
                <div className="error-message">{errors.lName}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formUniversity">
            <Form.Label>University :</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="University"
              placeholder="University"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.university}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              className={touched.university && errors.university ? "error" : null}
              />
              {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
              {touched.university && errors.university ? (
                <div className="error-message">{errors.university}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "error" : null}
            />
            {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formfName">
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="password"
              placeholder="Password"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.password}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              className={touched.password && errors.password ? "error" : null}
              />
              {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
              {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ): null}
          </Form.Group>
          <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
            Sign Up
          </BUTTON>
        </MYFORM>
      )}
      </Formik>
    </CONTAINER>
  );
}
}

export default CreateAccount;