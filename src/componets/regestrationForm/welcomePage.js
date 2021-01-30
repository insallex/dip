import React, {Component} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import '../../css/reg.css'
import NavbarForReg from "./navbar_for_reg";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Login from './Login';
import SignUp from './SignUP';
import { Switch, Route } from 'react-router-dom';


class WelcomePage extends Component {
    render() {
        return (
            <>
                    <div className="main_part">
                        <Row className='m-3'>
                            <Col className="md-5 p-5 h-50">
                                <Switch>
                                    <Route path = '/' exact component = {Login}/>
                                    <Route path = '/registrationPage' render = {() => <SignUp />}/>
                                </Switch>
                            </Col>
                            <Col>
                                <div className='form-horizontal mt-4'>
                                    <Image fluid className='h-25 w-25 mt-5'
                                           src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/NATO_OTAN_Insignia.svg/1200px-NATO_OTAN_Insignia.svg.png'
                                    />
                                    <h2 className='ml-4 mr-4'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse magni
                                            perferendis porro. Adipisci asperiores aspernatur consequuntur dolor itaque
                                            nulla quaerat quam. Aliquam beatae, dolor impedit inventore nihil pariatur
                                            recusandae voluptatum.
                                        </p>
                                        <p>Ea facere illum inventore, minus nisi provident quia quos voluptatibus.
                                            Architecto, at deleniti deserunt eos hic, inventore labore maiores maxime
                                            minima natus nemo odio provident, quam quis repudiandae tempora velit?
                                        </p></h2>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </>
        );
    }
}

export default WelcomePage;