import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import axios from 'axios';

class Profile extends Component{
    state = {
        name: '',
        phone: '',
        email: 'BA@gmail.com',
        school: '',
        major: '',
        car: ''
    }
    
    componentDidMount() {

        axios.get('/profile', {
            params: {
              email: 'BA@gmail.com'
            }
          })
          .then(function (response) {
            console.log(response);
            this.setState({name: response.data[0].name});
            this.setState({name: response.data[0].phone});
            this.setState({name: response.data[0].email});
            this.setState({name: response.data[0].school});
            this.setState({name: response.data[0].major});
            this.setState({name: response.data[0].car});
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
                        <h2><input id="this.state.name" type="text"></input></h2>
                        <img 
                            src="https://p7.hiclipart.com/preview/411/606/476/giant-panda-polar-bear-stirfry-stunts-we-bare-bears-grizzly-bear-polar-bear.jpg"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}>
                            About me: hello hello meow meow cookie yum yum hungry. hello hello meow meow cookie yum yum hungry.
                            hello hello meow meow cookie yum yum hungry. hello hello meow meow cookie yum yum hungry.
                            hello hello meow meow cookie yum yum hungry. hello hello meow meow cookie yum yum hungry. 
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
                                        (XXX)XXX-XXXX
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        meowmeow@flumerides.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        San José State University
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        Computer Science 
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        Honda Accord 2016 | White
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