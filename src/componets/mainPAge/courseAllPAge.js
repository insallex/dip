import React, {Component} from 'react';
import LeftMenu from "./leftMenu";
import Listening2 from "../course/Listening/Listening2";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Moduke_for from '../moduke_for_course';
import '../../css/forQuiz.css'

class CourseAllPAge extends Component {
    render() {
        return (
            <div className="container-fluid especcially ">
                <Moduke_for/>
                <Row>
                    <Col>
                <LeftMenu/>
                    </Col>
                <Col className='col-lg-9 col-md-9 col-sm-9'>
                <Listening2/>
                </Col>
                </Row>
            </div>
        );
    }
}

export default CourseAllPAge;