import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Cell } from 'react-mdl';

class Drive extends Component{
    state = {
        destination:'',
        time:'',
        date:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div className="drive-body">
                <Grid className="drive-grid">
                    <Cell col={12}>
                        <Formik
                            initialValues={{
                                destination: "Destination",
                                departure: "Depature",
                                time: "Time",
                                date: "Date",
                                cost: "Cost"
                            }}
                            validate={values => {
                                let errors = {};
                                if (!values.destination || values.destination === "Destination")
                                errors.destination = "Destination Required";
                                if (!values.depature || values.depature === "Depature")
                                errors.firstName = "Depature Required";
                                if (!values.cost || values.cost === "cost")
                                errors.password = "Cost Required";
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
                                <form className="white" onSubmit={this.handleSubmit}>
                                    <h5 className = "grey-text text-darken-3">Create A Ride!</h5>
                                    <div className="input-field">
                                        <Field type="Destination" name="destination" />                           
                                        <ErrorMessage name="destination" component="div" />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="departure">Departure</label>
                                        <Field type="Depature" name="departure" />
                                        <ErrorMessage name="depature" component="div" />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="time">Time </label>
                                        <Field type="time" name='time' />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="date">Date </label>
                                        <input type="date" id='date' onChange={this.handleChange} />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="cost">Cost </label>
                                        <input type="text" id='cost' onChange={this.handleChange} />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="seats">Seats </label>
                                        <input type="text" id='seats' onChange={this.handleChange} />
                                    </div>
                                    <div className="input-field">
                                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Drive;