import React, { Component } from 'react';
import { Grid, List, ListItem, ListItemContent, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

class Passengers extends Component{
    render(){
        return(
            <div className="passenger-body">
                <Grid className="passenger-grid">
                    <Cell col={12}>
                        <List>
                            <ListItem>
                                <Link to="/profile">
                                    <ListItemContent icon="person">Brandon</ListItemContent>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/profile">
                                    <ListItemContent icon="person">Connie</ListItemContent>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/profile">
                                    <ListItemContent icon="person">John</ListItemContent>
                                </Link>
                            </ListItem>
                        </List>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Passengers;