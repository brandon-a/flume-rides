import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';
import GooglePlacesSearch from './GooglePlacesSearch';

class Drive extends Component{
    state = {
        datetime: '',
        otherLocation: '',
        toSchool: 0,
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
                        <h1 style={{ fontFamily: 'Oxygen'}}>
                            Create a Ride
                        </h1>
                        <Formik
                            validate={values => {
                                let errors = {};
                                //if (!values.otherLocation || values.otherLocation === "otherLocation")
                                //errors.otherLocation = "Destination Required";
                                //if (!values.school || values.school === "School")
                                //errors.school = "Departure Required";
                                if (!values.cost || values.cost === "cost")
                                errors.cost = "Cost Required";
                                if (!values.time || values.time === "time")
                                errors.time = "Time Required";
                                if (!values.date || values.date === "date")
                                errors.date = "Date Required";
                                if (!values.toFrom || values.toFrom === "toFrom")
                                errors.toFrom = "Enter a 0 for TO, or 1 for FROM";
                                else if (
                                !/^(0|1)$/i.test(
                                    values.toFrom
                                )
                                ) {
                                errors.toFrom =
                                    "Must be a 0 or 1";
                                }


                                //TODO: ADD BOOLEAN FOR SCHOOL
                                //valid datetime = 2010-04-30 07:27:39
                                this.setState({datetime: values.date + ' ' + values.time + ':00'});
                                //this.setState({otherLocation: values.otherLocation});
                                //this.setState({school: values.school});
                                this.setState({cost: values.cost});
                                this.setState({schoolBool: values.toFrom});

                                // else if (
                                //     !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
                                //         values.date
                                //     )
                                // )

                                return errors;
                                
                                

                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log('creating ride_entry in drive.js....');
                                const ride_entry = {
                                    datetime: this.state.datetime,
                                    otherLocation: this.state.google_destination,
                                    //school: this.state.school,
                                    cost: this.state.cost,
                                    schoolBool: this.state.schoolBool
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
                                Other Location: <GooglePlacesSearch parentCallback = {this.callback_for_state}/> 
                                    <div className="input-field">
                                        <label htmlFor="toFrom">To (0) / From (1) </label>
                                        <Field type="boolean" name="toFrom" />                                
                                        <ErrorMessage name="toFrom" component="div" />
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