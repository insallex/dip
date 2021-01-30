import React, {Component} from 'react';
import {ListUnit} from "../../const/listUnut";
import {Accordion, Card, Button} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

class LeftMenu extends Component {
    render() {
        return(
            <div>
                {Object.values(ListUnit).map((item) =>{
                    return(
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <li>{item.nameUnit}</li>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card>
                                        <ListGroup variant="flush">
                                            { item.parts.map((num)=>
                                                <ListGroup.Item><a href={num}>{num}</a></ListGroup.Item>) }
                                        </ListGroup>
                                    </Card>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    )
                })}
            </div>
        )
    }
}

export default LeftMenu;