import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import axios from 'axios';

class Profile extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: 'Name Name',
            phone: '(XXX) XXX-XXXX',
            email: 'meow@flumerides.com',
            school: 'San José State University',
            major: 'Computer Science',
            car: 'Honda Accord 2016 | White'
        };
    }
    
    componentDidMount() {
        var self = this;
        axios.get('/profile')
        .then(function (response) {
            self.setState({
                name: response.data.users[0].name,
                phone: response.data.users[0].phone,
                email: response.data.users[0].email,
                school: response.data.users[0].school,
                major: response.data.users[0].major,
                car: response.data.users[0].car
            });
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });  
    }

    render(){
        return(
            <div className="profile-body">
                <Grid className="profile-grid">
                    <Cell col={6}>
                        <h2>{ this.state.name }</h2>
                        <img 
                            src="https://p7.hiclipart.com/preview/411/606/476/giant-panda-polar-bear-stirfry-stunts-we-bare-bears-grizzly-bear-polar-bear.jpg"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}>
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="info-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        { this.state.phone }
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        { this.state.email }
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        { this.state.school }
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        { this.state.major }
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        { this.state.car }
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Profile;