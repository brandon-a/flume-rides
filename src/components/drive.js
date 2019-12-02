import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';
import GooglePlacesSearch from './GooglePlacesSearch';

class Drive extends Component{
    state = {
        datetime: '',
        school: '',
        otherLocation: '',
        // TODO: toSchool: ,
        cost: '',
        google_destination: ''
    }

    callback_for_state = (component_data) => {
        this.setState({google_destination : component_data});
    };

    render(){
        return(
            <div className="drive-body">
                <Grid className="drive-grid">
                    <Cell col={12}>
                        <h1>
                            Create a Ride
                        </h1>
                        <Formik
                            validate={values => {
                                let errors = {};
                                if (!values.otherLocation || values.otherLocation === "otherLocation")
                                errors.otherLocation = "Destination Required";
                                if (!values.school || values.school === "School")
                                errors.school = "Departure Required";
                                if (!values.cost || values.cost === "cost")
                                errors.cost = "Cost Required";
                                if (!values.time || values.time === "time")
                                errors.time = "Time Required";
                                if (!values.date || values.date === "date")
                                errors.date = "Date Required";

                                //TODO: ADD BOOLEAN FOR SCHOOL
                                //valid datetime = 2010-04-30 07:27:39
                                this.setState({datetime: values.date + ' ' + values.time + ':00'});
                                this.setState({otherLocation: values.otherLocation});
                                this.setState({school: values.school});
                                this.setState({cost: values.cost});
                                //this.setState({schoolBool: values.schoolBool});

                                // else if (
                                //     !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
                                //         values.date
                                //     )
                                // )

                                return errors;
                                
                                

                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                const ride_entry = {
                                    datetime: this.state.datetime,
                                    otherLocationn: this.state.otherLocation,
                                    school: this.state.school,
                                    cost: this.state.cost
                                    //schoolBool: this.state.schoolBool
                                };
                                console.log('INSIDE ONSUBMIT BEFORE POST');
                                axios.post('/new_ride', { ride_entry })
                                    .then(res => {
                                        console.log(res);
                                        console.log(res.data);
                                    });    

                                setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                }, 400);
                            }}
                            >
                            {({ isSubmitting }) => (
                                <Cell col={12}>
                                <Form>
                                <GooglePlacesSearch parentCallback = {this.callback_for_state}/> 
                                    <div className="input-field">
                                    <label htmlFor="destination">Destination </label>
                                        <Field type="destination" name="destination" />                           
                                        <ErrorMessage name="destination" component="div" />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="departure">Departure </label>
                                        <Field type="departure" name="departure" />
                                        <ErrorMessage name="departure" component="div" />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="cost">Cost </label>
                                        <Field type="cost" name="cost" />                                
                                        <ErrorMessage name="cost" component="div" />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="time">Time </label>
                                        <Field type="time" name="time" />
                                        <ErrorMessage name="time" component="div" />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="date">Date </label>
                                        <Field type="date" name="date" />
                                        <ErrorMessage name="date" component="div" />
                                    </div>
                                    <div className="input-field">
                                        <button type="Create" disabled={isSubmitting}>
                                            Create
                                        </button>
                                    </div>
                                </Form>
                                </Cell>
                            )}
                        </Formik>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Drive;