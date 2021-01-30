import React, {Component} from 'react';

class ButtonNextPage extends Component {
    render() {
        return (
            <div>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button>L1</Button> <Button>S1</Button> <Button>G1</Button> <Button>W1</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

export default ButtonNextPage;