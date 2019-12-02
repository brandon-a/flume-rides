import React, { Component } from 'react';
import { List, ListItem, Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';
import GooglePlacesSearch from './GooglePlacesSearch';
import ridecards from './ridecards';


class Ride extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
        this.state.google_destination = "";
    }

    callback_for_state = (component_data) => {
        this.setState({google_destination : component_data});
    };

    toggleCategories(){
        {/* Ride 1 */}
        if(this.state.activeTab === 0){
            return(
                <div className="ride-grid">
                    <GooglePlacesSearch parentCallback = {this.callback_for_state}/>
                    <ridecards />
                    {/* Ride 1 */}
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

                    {/* Ride 2 */}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'Url(https://vignette.wikia.nocookie.net/webarebears/images/3/37/Ice_bear.png/revision/latest/scale-to-width-down/2000?cb=20160619204008) center / cover'}}>Ride 1</CardTitle>
                        <CardText>
                            <List>
                                <ListItem>Destination:</ListItem>
                                <ListItem>Departure:</ListItem>
                                <ListItem>Date:</ListItem>
                                <ListItem>Time:</ListItem>
                                <ListItem>Cost:</ListItem>
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

                    {/* Ride 3 */}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'Url(https://vignette.wikia.nocookie.net/webarebears/images/3/37/Ice_bear.png/revision/latest/scale-to-width-down/2000?cb=20160619204008) center / cover'}}>Ride 1</CardTitle>
                        <CardText>
                            <List>
                            <ListItem>Destination:</ListItem>
                                <ListItem>Departure:</ListItem>
                                <ListItem>Date: </ListItem> 
                                <ListItem>Time:</ListItem>
                                <ListItem>Cost:</ListItem>
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

                    {/* Ride 4 */}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'Url(https://vignette.wikia.nocookie.net/webarebears/images/3/37/Ice_bear.png/revision/latest/scale-to-width-down/2000?cb=20160619204008) center / cover'}}>Ride 1</CardTitle>
                        <CardText>
                            <List>
                            <ListItem>Destination:</ListItem>
                                <ListItem>Departure:</ListItem>
                                <ListItem>Date: </ListItem> 
                                <ListItem>Time:</ListItem>
                                <ListItem>Cost:</ListItem>
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
                    
                </div>

            )
        }

        else if(this.state.activeTab === 1){
            return(
                <div className="ride-grid">
                    <GooglePlacesSearch />
                    {/* Ride 1 */}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'Url(https://www.stickpng.com/assets/images/5c17909a44f5fd02b8cd3b74.png) center / cover'}}>Ride 2</CardTitle>
                        <CardText>
                            <List>
                                <ListItem>Destination:</ListItem>
                                <ListItem>Departure:</ListItem>
                                <ListItem>Date:</ListItem>
                                <ListItem>Time:</ListItem>
                                <ListItem>Cost:</ListItem>
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

                    {/* Ride 2 */}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'Url(https://www.stickpng.com/assets/images/5c17909a44f5fd02b8cd3b74.png) center / cover'}}>Ride 2</CardTitle>
                        <CardText>
                            <List>
                                <ListItem>Destination:</ListItem>
                                <ListItem>Departure:</ListItem>
                                <ListItem>Date:</ListItem>
                                <ListItem>Time:</ListItem>
                                <ListItem>Cost:</ListItem>
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

                    {/* Ride 3 */}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'Url(https://www.stickpng.com/assets/images/5c17909a44f5fd02b8cd3b74.png) center / cover'}}>Ride 2</CardTitle>
                        <CardText>
                            <List>
                                <ListItem>Destination:</ListItem>
                                <ListItem>Departure:</ListItem>
                                <ListItem>Date:</ListItem>
                                <ListItem>Time:</ListItem>
                                <ListItem>Cost:</ListItem>
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