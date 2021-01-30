import React, {Component} from 'react';
import '../../css/reg.css'
import ModukeForCourse from "../moduke_for_course";
import {Table} from "react-bootstrap";
import Row from "react-bootstrap/Row";

class RatingComp extends Component {
    render() {
        return (
            <>
              <ModukeForCourse/>
                <div className='main_part '>
                    <Row  className="justify-content-md-center">
                        <h1  className='justify-content-center mt-5 mb-2'>Рейтинг користувача</h1>
                    </Row>
                    <Row className="justify-content-md-center mt-2">
                    <Table striped bordered hover variant="dark" className='justify-content-center  w-75'>
                        <thead>
                        <tr>
                            <th>№</th>
                            <th>Назва тесту</th>
                            <th>Результат</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>READING</td>
                            <td>5/10</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>LISTENING</td>
                            <td>7/10</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>GRAMMAR</td>
                            <td>10/10</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><h5>Тест пройдено</h5></td>
                        </tr>
                        </tbody>
                    </Table>
                    </Row>
                </div>
            </>
        );
    }
}

export default RatingComp;