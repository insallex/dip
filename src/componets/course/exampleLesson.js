import React, {Component} from 'react';
import {Alert, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";


class ExampleLesson extends Component {
    render() {
        return (
            <div>
                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                    <hr/>
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                </Alert>
                <h2>Question forms</h2>
                <div className='justify-content-center'> Do you know how to make questions?
                </div>
                <div>Look at these examples to see how questions are made.

                    Is he a teacher?
                    Does she eat meat?
                    When did you get here?
                    How much does a train ticket cost?

                    Try this exercise to test your grammar.
                </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <td className="rtecenter">Affirmative</td>
                        <td className="rtecenter">Question</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><em><strong>I am</strong> late.</em></td>
                        <td><em><strong>Am I</strong> late?</em></td>
                    </tr>
                    <tr>
                        <td><em><strong>I can</strong> help.</em></td>
                        <td><em><strong>Can I</strong> help?</em></td>
                    </tr>
                    <tr>
                        <td><em><strong>She is</strong> sleeping.</em></td>
                        <td><em><strong>Is she</strong> sleeping?</em></td>
                    </tr>
                    <tr>
                        <td><em><strong>We have</strong> met before.</em></td>
                        <td><em><strong>Have we</strong> met before?</em></td>
                    </tr>
                    </tbody>
                </Table >
                If there is a question word (why, what, where, how, etc.), it goes before the verb.
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <td className="rtecenter">Question</td>
                        <td className="rtecenter">Question with question word</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><em>Are you late?</em></td>
                        <td><em><strong>Why </strong>are you late?</em></td>
                    </tr>
                    <tr>
                        <td><em>Was she there?</em></td>
                        <td><em><strong>When </strong>was she there?</em></td>
                    </tr>
                    <tr>
                        <td><em>Can I help?</em></td>
                        <td><em><strong>How </strong>can I help?</em></td>
                    </tr>
                    <tr>
                        <td><em>Have we met before?</em></td>
                        <td><em><strong>Where </strong>have we met before?</em></td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ExampleLesson;