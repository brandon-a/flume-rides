import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Ride extends Component{
    constructor(props){
        super(props);
        this.state ={ activeTab: 0};
    }
    toggleCategories(){
        {/* Ride 1 */}
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'Url(https://vignette.wikia.nocookie.net/webarebears/images/3/37/Ice_bear.png/revision/latest/scale-to-width-down/2000?cb=20160619204008) center / cover'}}>Ride 1</CardTitle>
                    <CardText>
                        nom nom nom nom
                    </CardText>
                    <CardActions border>
                        <Button colored>Accept</Button>
                        <Button colored>Decline</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

            )
        }

        else if(this.state.activeTab === 1){
            return(
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'Url(https://www.stickpng.com/assets/images/5c17909a44f5fd02b8cd3b74.png) center / cover'}}>Ride 2</CardTitle>
                    <CardText>
                        nom nom nom nom
                    </CardText>
                    <CardActions border>
                        <Button colored>Accept</Button>
                        <Button colored>Decline</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        }
        
        // else if(this.state.activeTab === 2){
        //     return(
        //         <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
        //             <CardTitle style={{color: 'black', height: '176px', background: 'Url(https://p7.hiclipart.com/preview/411/606/476/giant-panda-polar-bear-stirfry-stunts-we-bare-bears-grizzly-bear-polar-bear.jpg) center / cover'}}>Ride 3</CardTitle>
        //             <CardText>
        //                 nom nom nom nom
        //             </CardText>
        //             <CardActions border>
        //                 <Button colored>Accept</Button>
        //                 <Button colored>Decline</Button>
        //             </CardActions>
        //             <CardMenu style={{color:'#fff'}}>
        //                 <IconButton name="share"/>
        //             </CardMenu>
        //         </Card>
        //     )
        // }
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