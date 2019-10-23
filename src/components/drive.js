import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Cell } from 'react-mdl';

class Drive extends Component{
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
                                <Cell col={12}>
                                <Form>
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
                                // <form className="white" onSubmit={this.handleSubmit}>
                                //     <h5 className = "grey-text text-darken-3">Create A Ride!</h5>
                                //     <div className="input-field">
                                //         <label htmlFor="destination">Destination</label>
                                //         <Field type="destination" name=" " />                           
                                //         <ErrorMessage name="destination" component="div" />
                                //     </div>
                                //     <div className="input-field">
                                //         <label htmlFor="departure">Departure</label>
                                //         <Field type="Depature" name="departure" />
                                //         <ErrorMessage name="depature" component="div" />
                                //     </div>
                                //     <div className="input-field">
                                //         <label htmlFor="time">Time </label>
                                //         <Field type="time" name='time' />
                                //     </div>
                                //     <div className="input-field">
                                //         <label htmlFor="date">Date </label>
                                //         <input type="date" id='date' onChange={this.handleChange} />
                                //     </div>
                                //     <div className="input-field">
                                //         <label htmlFor="cost">Cost </label>
                                //         <input type="text" id='cost' onChange={this.handleChange} />
                                //     </div>
                                //     <div className="input-field">
                                //         <label htmlFor="seats">Seats </label>
                                //         <input type="text" id='seats' onChange={this.handleChange} />
                                //     </div>
                                //     <div className="input-field">
                                //         <button className="btn pink lighten-1 z-depth-0">Create</button>
                                //     </div>
                                // </form>
                            )}
                        </Formik>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Drive;