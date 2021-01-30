import React, {Component} from 'react';
import Quiz from "react-quiz-component";
import {quiz} from "../const/quiz";
import Container from "react-bootstrap/Container";
import '../css/forForm.css'

class QuizEx extends Component {
    render() {
        return (
            <div >
                    <Quiz quiz={quiz}/>
            </div>
        );
    }
}

export default QuizEx;