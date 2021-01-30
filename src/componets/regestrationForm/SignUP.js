import React, {Component} from 'react';
import NavbarForReg from "./navbar_for_reg";
import {Button, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";

class SignUp extends Component {
    render() {
        return (
            <>
            <Container className='m-5'>
                <Form>
                    <Form.Group controlId="formforName">
                        <Form.Label>Ім'я</Form.Label>
                        <Form.Control type="text" placeholder="Name"/>
                    </Form.Group>
                    <Form.Group controlId="Login">
                        <Form.Label>Логін:</Form.Label>
                        <Form.Control type="text" placeholder="Login"/>
                    </Form.Group>
                    <Form.Group controlId="Password">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="text" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="Rank">
                        <Form.Label>Звання</Form.Label>
                        <Form.Control type="text" placeholder="Rank"/>
                    </Form.Group>
                    <Form.Group controlId="MilitaryDep">
                        <Form.Label>Військова частина</Form.Label>
                        <Form.Control type="text" placeholder="Your military unit"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Пройти тест
                    </Button>
                </Form>
            </Container>
                </>
        );
    }
}

export default SignUp;