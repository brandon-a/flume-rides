import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class About extends Component{
    render(){
        return(
            <div className="about-body">
                <Grid className="about-grid">
                        <h1>Flume Rides</h1>
                        <p>Many students do not live in the city in which their University is at. 
                            Many have to commute from far distances just to get to school and sometimes they want to go home. 
                            Travel is expensive, whether it be flying, bussing, or driving. 
                            Very often, students travel from the same area, so what if there was a way that they can safely go the distance together? 
                            Often times students use facebook groups to coordinate ride sharing over long distances, 
                            but this can often be unwieldy and hard to find a ride to or from the desired destination. 
                            Our goal is to create a streamlined platform that simplifies this process.
                            
                        </p>
                        <p>This problem is worth solving because there are millions of college students across the country that would appreciate 
                            using an app that vastly simplifies the process of getting between school and home. 
                            Especially with the rising costs. 
                            Popular applications such as Uber or Lyft are really only meant to be used for short distance travel, 
                            and this fills a niche within the market.                            
                        </p>
                        <p>

                        </p>
                        <p>
                            
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
                                Major: Computer Science
                            </p>
                            <p>
                                Graduation: Fall 2019
                            </p>
                        </Cell>
                        <Cell col={4}>
                            <h3> 
                                Connie Huynh 
                            </h3>
                            <p>
                                Major: Computer Science
                            </p>
                            <p>
                                Graduation: Spring 2020
                            </p>
                        </Cell>
                        <Cell col={4}>
                            <h3> 
                                John McGinley
                            </h3>
                            <p>
                                Major: Computer Science
                            </p>
                            <p>
                                Graduation: Fall 2019
                            </p>
                        </Cell>
                </Grid>
            </div>
        )
    }
}
export default About;