import React, {Component} from 'react';
import Quiz from 'react-quiz-component';
import {quiz} from '../../const/quiz';
import Container from "react-bootstrap/Container";
import '../../App.css';

class ExamplePage extends Component {
    render() {
        return (
            <>
                <Container>
                    <Quiz quiz={quiz}/>
                </Container>
            </>
        );
    }
}

export default ExamplePage;