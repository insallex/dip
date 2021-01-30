import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "../HomePage";
import Button from "react-bootstrap/Button";

class NavbarForReg extends Component {
    render() {
        return (
            <div>
                <>
                    <Navbar  style={{backgroundColor: '#AE9994', font:'25px'}} expand="lg">
                        <Navbar.Brand href="#home">Military English</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/Home">Головна</Nav.Link>
                                <Nav.Link href="/smr">Про тест</Nav.Link>
                            </Nav>
                            <Navbar.Toggle/>
                            <Navbar.Collapse className="justify-content-end">
                                <Button className='m-2' variant="outline-dark">Sign up</Button>
                                <Button variant="dark">Log in</Button>

                            </Navbar.Collapse>
                        </Navbar.Collapse>
                    </Navbar>
                    <Router>
                        <Switch>
                            <Route path='/Home' component={HomePage}/>
                        </Switch>
                    </Router>
                </>
            </div>
        );
    }
}

export default NavbarForReg;