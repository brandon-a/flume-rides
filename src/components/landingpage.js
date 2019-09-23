import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}> 
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="http://i1.hdslb.com/bfs/archive/ba5cfd393d15275c9a7cbc1f42ee88747b0136bb.jpg"
                        alt="logo"
                        className="logo-image"
                        />

                        <div className="banner">
                            <h1>Flume Rides</h1>
                        <hr/>
                        <p>meow meow meow meow | bark | test</p>
                        <div className="drive-links">
                            {/* Drive */}
                            <a href="/drive" rel ="noopener noreferrer">
                                <i className="fas fa-car"  aria-hidden="true"/>
                            </a>
                            
                            {/* Drive */}
                            <a href="/ride" rel ="noopener noreferrer">
                                <i className="fas fa-users"  aria-hidden="true"/>
                            </a>           

                            {/* Sign up */}
                            <a href="/createaccount" rel ="noopener noreferrer">
                                <i className="fas fa-users"  aria-hidden="true"/>
                            </a>                       

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;