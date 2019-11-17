import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { NavLink } from 'react-router-dom';

class LandingPage extends Component{
    render(){
        return(
            <div className="landing-body"> 
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <h1> Welcome to Flume Rides </h1>
                        <p>
                            Let's get started!
                        </p> 
                        <p>
                            To create an account, please <NavLink to='/createaccount'>click here</NavLink>
                        </p>      
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;