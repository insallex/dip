import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import HomePage from "./HomePage";
import Info from "./Info";
import Levels from "./Levels";
import SmrInfo from "./SMR_Info";
import Top from "./Top";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../css/forQuiz.css'
import RatingComp from "./rating/rating_comp";

class ModukeForCourse extends Component {
    render() {
        return (
            <>
                <Navbar expand="lg" className='nav_bar light'>
                    <Navbar.Brand href="#home">Military English</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/Home">Головна</Nav.Link>
                            <Nav.Link href="/smr">СМР</Nav.Link>
                            <NavDropdown title="Загальні положення" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/information">Про тест</NavDropdown.Item>
                                <NavDropdown.Item href="/levels">Рівень оцінювання</NavDropdown.Item>
                                <NavDropdown.Item href="/rating">Рейтинг</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/Home" component={HomePage}/>
                        <Route exact path="/information" component={Info}/>
                        <Route exact path='/levels' component={Levels}/>
                        <Route exact path='/SMR' component={SmrInfo}/>
                        <Route exact path='/rating' render={() => <RatingComp />}/>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default ModukeForCourse;




