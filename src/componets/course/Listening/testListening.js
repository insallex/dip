import React, {Component} from 'react';
import {InputGroup, FormControl, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Steps from "../steps";

class TestListening extends Component {
    render() {
        return (
            <div className='m-3'>
                <Card className='p-3'>
                <div>
                    <h2><b>LE Podcasts: S01E01</b> - Check your understanding</h2>
                    <p>Listen to the whole podcast then read the questions and choose ALL the correct answers.</p>
                </div>
                <div>
                    <h6>Question:</h6>What do you know about Ravi?
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalCheck">
                            <Col sm={{span: 10, offset: 2}}>
                                <Form.Check className='mb-2 mt-2' label="He is from Manchester."/>
                                <Form.Check  className='mb-2' label="He likes football."/>
                                <Form.Check  className='mb-2' label="He likes riding his mountain bike."/>
                                <Form.Check label="He is 23"/>
                            </Col>
                        </Form.Group>
                    </Form>
                    <Steps/>
                </div>
                </Card>
            </div>
        );
    }
}

export default TestListening;