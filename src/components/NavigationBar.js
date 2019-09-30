import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const navbar = () => {
    // <header className="navbar">
    //     <nav className="navbar_tool">
    //         <div></div>
    //         <div className="navbar_logo"><a href="#home">Flume Rides</a></div>
    //         <div className="navbar_items">
    //             <ul>
    //             <li><a href="#home">Home</a></li>
    //                 <li><a href="landingpage.js">About</a></li>
    //                 <li><a href="#profile">Profile</a></li>
    //                 <li><a href="#drive">Drive</a></li>
    //                 <li><a href="#ride">Ride</a></li>
    //                 <li><a href="#logout">Logout</a></li>
    //             </ul>
    //         </div>
    //     </nav>
    // </header>
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Flume Rides</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}
/*{
    return(
        <>
    <Navbar bg = "dark" expand="lg">
        <Navbar.Brand href="#home"> Flume Rides</Navbar.Brand>
        <Navbar.Toggle aria-controls="bac-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav classname="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.link href="#users">Profile</Nav.link>
                <Nav.link href="#about">About</Nav.link>
                <Nav.link href="#drive">Drive</Nav.link>
                <Nav.link href="#ride">Ride</Nav.link>
                <Nav.link href="#logout">Logout</Nav.link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    <br />
</>
*/
 //   );
//}

export default navbar;