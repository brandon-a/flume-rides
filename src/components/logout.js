import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import axios from 'axios';

class Logout extends Component{

    componentDidMount() {
        axios.post('/logout')
        .then(function (response) {
            if(response.data.redirect === '/') {
                window.location = "/"
            } else {
                window.location = "/login"
            }
        });
    }

    render(){
        return(
            <div className="logout-body">
                <Grid className="logout-grid">
                    <h1>Logout</h1>
                </Grid>
            </div>
        )
    }
}
export default Logout;