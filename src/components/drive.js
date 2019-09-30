import React, { Component } from 'react';
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
                        <form className="white" onSubmit={this.handleSubmit}>
                            <h5 className = "grey-text text-darken-3">Create A Ride!</h5>
                            <div className="input-field">
                                <label htmlFor="destination">Destination</label>
                                <input type="text" id='destination' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="departure">Departure</label>
                                <input type="text" id='departure' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="time">Time </label>
                                <input type="time" id='time' onChange={this.handleChange} />
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
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Drive;