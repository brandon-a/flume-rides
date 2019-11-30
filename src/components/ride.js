import React, { Component } from 'react';
//import { List, ListItem, Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';
import GooglePlacesSearch from './GooglePlacesSearch';
import axios from 'axios';
import { Card, Button, Dropdown, DropdownButton, ButtonToolbar } from 'react-bootstrap';
import { Tab, Grid, Cell, ListItem, Tabs, List } from 'react-mdl';


class Ride extends Component{
    constructor(props){
        super(props);
        this.state ={ activeTab: 0, rides:[] };
    }
    componentDidMount(){
        axios.get('/get_ride_list/')
        .then(res => {
            this.setState({
                rides: res.data.users
            })
        }).catch(err => {
            console.log("ERROR" + err);
        });
    }

    //old stuff
    toggleCategories(){
        {/* Ride 1 */}
        if(this.state.activeTab === 0){
            let i = 1;
            return(
                <div className="ride-grid">
                    {console.log(this.state.rides.length)}
                    {this.state.rides.map((ride, index) => (
                        <Card border="primary" style={{ width: '23rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                          <Card.Title>Ride {index+1}</Card.Title>
                          <Card.Text>
                                   <List>
                                     <ListItem>Destination: {ride.otherLocation}</ListItem>
                                     <ListItem>Departure:{ride.school}</ListItem>
                                     <ListItem>Date/Time:{ride.datetime}</ListItem>
                                     <ListItem>Cost: {ride.cost}</ListItem>
                                     <ListItem>Spots Available: {ride.spotsAvailable}</ListItem>
                                    </List>
                          </Card.Text>
                          <ButtonToolbar>
                          <Button variant="outline-dark">Select</Button>
                          <DropdownButton variant="outline-dark" id="dropdown-basic-button" title="Passengers">
                                <Dropdown.Item href="#/profile">P1</Dropdown.Item>
                                <Dropdown.Item href="#/profile">P2</Dropdown.Item>
                                <Dropdown.Item href="/profile">P3</Dropdown.Item>
                            </DropdownButton>
                            </ButtonToolbar>
                        </Card.Body>
                         </Card>
                    ))}

                </div>

            )
        }

        else if(this.state.activeTab === 1){
            return(
                <div className="ride-grid">
                     {this.state.rides.map((ride, index) => (
                        <Card border="dark" style={{ width: '23rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Ride {index+1}</Card.Title>
                            <Card.Text>
                                    <List>
                                        <ListItem>Destination: {ride.otherLocation}</ListItem>
                                        <ListItem>Departure:{ride.school}</ListItem>
                                        <ListItem>Date/Time:{ride.datetime}</ListItem>
                                        <ListItem>Cost: {ride.cost}</ListItem>
                                        <ListItem>Spots Available: {ride.spotsAvailable}</ListItem>
                                    </List>
                            </Card.Text>
                            <ButtonToolbar>
                            <Button variant="outline-primary">Select</Button>
                            <DropdownButton variant="outline-primary" id="dropdown-basic-button" title="Passengers">
                                <Dropdown.Item href="#/profile">P1</Dropdown.Item>
                                <Dropdown.Item href="#/profile">P2</Dropdown.Item>
                                <Dropdown.Item href="/profile">P3</Dropdown.Item>
                            </DropdownButton>
                            </ButtonToolbar>
                        </Card.Body>
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