import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';
import GooglePlacesSearch from './GooglePlacesSearch';

class Drive extends Component{
    state = {
        datetime: '',
        destination: '',
        source_location: '',
        cost: ''
    }

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
                                if (!values.destination || values.destination === "Destination")
                                errors.destination = "Destination Required";
                                if (!values.departure || values.departure === "Departure")
                                errors.departure = "Departure Required";
                                if (!values.cost || values.cost === "cost")
                                errors.cost = "Cost Required";
                                if (!values.time || values.time === "time")
                                errors.time = "Time Required";
                                if (!values.date || values.date === "date")
                                errors.date = "Date Required";


                                //valid datetime = 2010-04-30 07:27:39
                                this.setState({datetime: values.date + ' ' + values.time + ':00'});
                                this.setState({destination: values.destination});
                                this.setState({source_location: values.departure});
                                this.setState({cost: values.cost});


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
                                    destination: this.state.destination,
                                    source_location: this.state.source_location,
                                    cost: this.state.cost
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
                                <GooglePlacesSearch /> 
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