import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Login extends Component{
    state = {
        email:'',
        password:''
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
            <div className="login-body">
                <Grid className="login-grid">
                    <form className="white" onSubmit={this.handleSubmit}>
                        <h5 className = "grey-text text-darken-3">Log In</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                        </div>
                    </form>
                </Grid>
            </div>
        )
    }
}
export default Login;