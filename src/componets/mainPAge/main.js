import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import Page1 from '../../img/11.jpg';
import Page2 from '../../img/578.jpg';
import Page3 from '../../img/12.jpg';



class Main extends Component {
    render() {
        return (
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={Page1}
                            height='550px'
                            alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={Page2}
                            height='550px'
                            alt=""/>
                        <Carousel.Caption>
                            <h3>Будь в курсі всіх новин</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={Page3}
                            height='550px'
                            alt=""/>
                        <Carousel.Caption>
                            <h3>Та допомагай своїй країні</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </>

        );
    }
}

export default Main;
