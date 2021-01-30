import React, {Component} from 'react';
import Audio1 from '../../../media/elementary-podcasts-s01-e01.mp3'
import {Accordion, Col, Container, Image, Row, Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {text} from '../../../const/transcript_list_1'
import TestListening from "./testListening";

class Listening2 extends Component {
    render() {
        return (
            <div>
                <Container className='m-2'>
                    <h2>LISTENING
                    <small className="text-muted"> Unit 1.</small>
                    </h2>
                    <Row>
                        <Col>
                            <Image
                                className='m-3'
                                src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/article/public/TR03_iStock_000012142954_3.png?itok=vWXbwzvC"
                                roundedCircle/>
                        </Col>
                        <Col>
                            <p style={{fontSize: 25}}>In this episode the presenters, Tess and Ravi, introduce themselves, and their guests
                                talk about
                                Angelina Jolie, New York City and celebrities who work for charity. You can also meet
                                Carolina, a
                                Venezuelan student who’s coming to live in the UK. Will she arrive safely?</p>
                        </Col>
                    </Row>
                    <audio controls className='m-3'>
                        <source src={Audio1} type="audio/mpeg"/>
                    </audio>

                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" className=''>
                                    Transcript
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {Object.values(text).map((item) => {
                                        return (
                                            <>
                                                <h2>{item.title}</h2>
                                                <p>{item.text}</p>
                                            </>
                                        )
                                    })}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <TestListening/>
                </Container>
            </div>
        );
    }
}

export default Listening2;