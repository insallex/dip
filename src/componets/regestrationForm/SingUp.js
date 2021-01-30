import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import NavbarForReg from "./navbar_for_reg";


class SingUp extends Component {
    render() {
        return (
            <>
            <NavbarForReg/>
            <Container>
                <h1>WELCOME!</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Логін:</Form.Label>
                    <Form.Control type="email" placeholder="Login"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Text>
                    <a href='/signUP'>Зареєструватися</a>
                </Form.Text>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
                </>
        );
    }
}



export default SingUp;