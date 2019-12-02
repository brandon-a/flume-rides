import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import axios from 'axios';

class currentRides extends Component{
    constructor(props) {
        super(props);
        this.state = { rides:[] };
    }

    componentDidMount(){
        axios.get('/current_rides')
        .then(res => {
            this.setState({
                rides: res.data.users
            })
        }).catch(err => {
            console.log(err);
        })
    }

    displayRides(){
        return(
            <div className="ride-grid">
                    {console.log(this.state.rides.length)}
                    {this.state.rides.map((ride, index) => (
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'Url() center / cover'}}>My Ride {index+1}</CardTitle>
                        <CardText>
                            <List>
                                <ListItem>Destination: {ride.otherLocation}</ListItem>
                                <ListItem>Departure: {ride.school}</ListItem>
                                <ListItem>Date/Time: {ride.datetime}</ListItem>
                                <ListItem>Cost: {ride.cost}</ListItem>
                            </List>
                        </CardText>
                        <CardActions border>
                            <Link to="/cancel">
                                <Button colored>Cancel</Button>
                            </Link>
                            <Link to="/passengers">
                                <Button colored>Passengers</Button>
                            </Link>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    ))}
                    
                </div>

        )
    }



    render(){
        return(
            <div className="categories">
                <section className="rides-grid">
                    <Grid className="rides-grid">
                        <Cell col={12}>
                            <h1> Current Rides </h1>
                            {this.displayRides()}
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
export default currentRides;