import React, { Component } from 'react';
import { List, ListItem, Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';
import GooglePlacesSearch from './GooglePlacesSearch';
import axios from 'axios';

class Ride extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0, rides:[] };
        this.state.google_destination = "";
    }

    componentDidMount(){
        axios.get('/display_rides')
        .then(res => {
            console.log(res.data.users);
            this.setState({
                rides: res.data.users
            })
        }).catch(err => {
            console.log("ERROR" + err);
        });
    }

    callback_for_state = (component_data) => {
        this.setState({google_destination : component_data});
    };

    toggleCategories(){
        {/* Ride 1 */}
        if(this.state.activeTab === 0){
            let i = 1;
            return(
                <div className="ride-grid">
                    
                    <GooglePlacesSearch parentCallback = {this.callback_for_state}/>
                    {console.log(this.state.rides.length)}
                    {console.log("hello")}
                    {this.state.rides.map((ride, index) => (
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'Url() center / cover'}}>Ride {index+1}</CardTitle>
                        <CardText>
                            <List>
                                <ListItem>Destination: {ride.otherLocation}</ListItem>
                                <ListItem>Departure: {ride.school}</ListItem>
                                <ListItem>Date/Time: {ride.datetime}</ListItem>
                                <ListItem>Cost: {ride.cost}</ListItem>
                                <ListItem>Spots Available: {ride.spotsAvailable}</ListItem>
                            </List>
                        </CardText>
                        <CardActions border>
                            <Link to="/">
                                <Button colored>Select</Button>
                            </Link>
                            <Link to="/profile">
                                <Button colored>Driver</Button>
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

        else if(this.state.activeTab === 1){
            return(
                <div className="ride-grid">
                    <GooglePlacesSearch parentCallback = {this.callback_for_state}/>
                    {console.log(this.state.rides.length)}
                    {console.log("hello")}
                    {this.state.rides.map((ride, index) => (
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'Url() center / cover'}}>Ride {index+1}</CardTitle>
                        <CardText>
                            <List>
                                <ListItem>Destination: {ride.otherLocation}</ListItem>
                                <ListItem>Departure: {ride.school}</ListItem>
                                <ListItem>Date/Time: {ride.datetime}</ListItem>
                                <ListItem>Cost: {ride.cost}</ListItem>
                                <ListItem>Spots Available: {ride.spotsAvailable}</ListItem>
                            </List>
                        </CardText>
                        <CardActions border>
                            <Link to="/">
                                <Button colored>Select</Button>
                            </Link>
                            <Link to="/profile">
                                <Button colored>Driver</Button>
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
        
    }

    
    render(){
        return(
            <div className="categories">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>From SJSU</Tab>
                    <Tab>To SJSU</Tab>
                </Tabs>
                <section className="rides-grid">
                    <Grid className="rides-grid">
                        <Cell col={12}>
                            {this.toggleCategories()}
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
export default Ride;