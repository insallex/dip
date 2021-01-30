import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";


class Steps extends Component {
    render() {
        return (
            <div >
                <ButtonToolbar aria-label="Toolbar with button groups" className='justify-content-center'>
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

export default Steps;