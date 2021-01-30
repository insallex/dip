import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";
import '../../css/reg.css';
import SignUp from "./SignUP";

export default class Login extends Component {
    render() {
        return (
            <div>
            <div className="form-horizontal m-3 ">
                <span className="heading mt-5 p-5">АВТОРИЗАЦІЯ</span>
                <div className="form-group">
                    <input type="email" className="form-control mt-5" id="inputEmail"
                           placeholder="E-mail"/>
                </div>
                <div className="form-group help">
                    <input type="password" className="form-control mt-3" id="inputPassword"
                           placeholder="Password"/>
                    <i className="fa fa-lock"></i>
                    <a href="#" className="fa fa-question-circle"></a>
                </div>
                <div className="form-group mb-5">
                    <Button type="submit" variant="outline-danger" className="mr-3">Вхід</Button>
                    <Button type="submit" variant="outline-danger"><NavLink to='/registrationPage'>Зареєструватися</NavLink></Button>
                </div>
            </div>
        </div>
        );
    }
}
