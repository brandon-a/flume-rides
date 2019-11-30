import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Logout extends Component{
    render(){
        return(
            <div className="logout-body">
                <Grid className="logout-grid">
                    <h1 style={{ fontFamily: 'Oxygen'}}>Logout</h1>
                </Grid>
            </div>
        )
    }
}
export default Logout;