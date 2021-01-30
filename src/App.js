import Listening2 from "./componets/course/Listening/Listening2";
import ListLessons from "./componets/course/listLessons";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import QuizEx from "./componets/quizEx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LeftMenu from "./componets/mainPAge/leftMenu";
import CourseAllPAge from "./componets/mainPAge/courseAllPAge";
import WelcomePage from "./componets/regestrationForm/welcomePage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from "./componets/footer";
import RatingComp from "./componets/rating/rating_comp";

function App() {
    return (
        <BrowserRouter>
        <>
            <RatingComp/>
            <Footer/>
            </>
        </BrowserRouter>
    );
}

export default App;
