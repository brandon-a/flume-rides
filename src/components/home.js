import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component{
    render(){
        return(
            <div className="home-body">
                <Grid className="home-grid">
                    <Cell className="notif-left-col" col={4}>
                        <h2 style={{paddingTop:'2em'}}>Notifications</h2>
                        <h4 style={{color: 'gray'}}>Today</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Ride 1 has been cancelled</p>
                        <p>Brandon has joined your ride</p>
                        <p>Connie has joined your ride</p>
                        <p>John has joined your ride</p>
                        <h4 style={{color: 'gray'}}>Yesterday</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Ride 2 is full</p>
                        <p>Ride 1 has been cancelled</p>
                        <p>Brandon has joined your ride</p>
                        <p>Connie has joined your ride</p>
                        <p>John has joined your ride</p>
                        <p>Ride 1 has been cancelled</p>
                        <p>Brandon has joined your ride</p>
                        <p>Connie has joined your ride</p>
                        <p>John has joined your ride</p>
                        <p>Ride 1 has been cancelled</p>
                        <p>Brandon has joined your ride</p>
                        <p>Connie has joined your ride</p>
                        <p>John has joined your ride</p>
                    </Cell> 
                    <Cell className="notif-right-col" col={4}>
                        <h2 style={{paddingTop:'2em'}}>Blank</h2>
                        <h4 style={{color: 'gray'}}>meow</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>meow meow meow</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Home;