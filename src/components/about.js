import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class About extends Component{
    render(){
        return(
            <div className="about-body">
                <Grid className="about-grid">
                        <h1>Flume Rides</h1>
                        <p>Three students at San Jose State University wanted to create an application for ride sharing. 
                            The goal of this application is to allow students to safely ride to and from school amongst their peers.
                            
                        </p>
                        <p>As a result we created a long-distance rideshare web application that caters specifically to college students. 
                            The focus is to allow students to commute long distances for low cost with other students. We want you to have
                            access to a safe alternative to facebook groups which can be hard to navigate and search. 
                            
                        </p>
                        <p>Three students at San Jose State University wanted to create an application for ride sharing. 
                            The goal of this application is to allow students to safely ride to and from school amongst their peers.
                            
                        </p>
                        <p>Three students at San Jose State University wanted to create an application for ride sharing. 
                            The goal of this application is to allow students to safely ride to and from school amongst their peers.
                            
                        </p>
                        <p>Three students at San Jose State University wanted to create an application for ride sharing. 
                            The goal of this application is to allow students to safely ride to and from school amongst their peers.
                            
                        </p>

                </Grid>
                <Grid className="about-grid">
                    <h2>Developers</h2>
                </Grid>
                <Grid className="about-grid">
                    <Cell col={4}>
                            <h3> 
                                Brandon Archbold
                            </h3>
                            <p>
                                meow meow meow meow?
                            </p>
                        </Cell>
                        <Cell col={4}>
                            <h3> 
                                Connie Huynh 
                            </h3>
                            <p>
                                meow meow meow meow meow 
                            </p>
                        </Cell>
                        <Cell col={4}>
                            <h3> 
                                John McGinley
                            </h3>
                            <p>
                                MEOW MEOW MEOW MEOW MEOW
                            </p>
                        </Cell>
                </Grid>
            </div>
        )
    }
}
export default About;