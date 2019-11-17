import React, { Component } from 'react';
import { List, ListItem, Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';

const cards = () => {
    return (
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'Url(https://vignette.wikia.nocookie.net/webarebears/images/3/37/Ice_bear.png/revision/latest/scale-to-width-down/2000?cb=20160619204008) center / cover'}}>Ride 1</CardTitle>
                <CardText>
                    <List>
                        <ListItem>Destination:</ListItem>
                        <ListItem>Departure:</ListItem>
                        <ListItem>Date:</ListItem>
                        <ListItem>Time:</ListItem>
                        <ListItem>Cost</ListItem>
                        <ListItem>Spots Available: </ListItem>
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
    )
}

export default cards;