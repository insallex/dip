import React, {Component} from 'react';
import '../css/footerCSS.css'

class Footer extends Component {
    render() {
        return (
            <>
                <footer className='footer-dark'>
                    <div className="container">
                        <div className="row" style={{background : "#AE9994"}}>
                            <div className="col-sm-6 col-md-3 item" style={{background : "#AE9994"}}>
                                <h3>ПРЕС-СЛУЖБА</h3>
                                <ul>
                                    <li><a href="#">Новини</a></li>
                                    <li><a href="#">Запит на публічну інформацію</a></li>
                                    <li><a href="#">Громадські приймальні</a></li>
                                </ul>
                                <div className='col p-2'>
                                    <img
                                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png'
                                        alt=""
                                        height='30'
                                        width='30'
                                        className='p-1'
                                    />
                                    <img
                                        src='https://www.mil.gov.ua/img/socialicons/instagram.png'
                                        alt=""
                                        height='30'
                                        width='30'
                                        className='p-1'
                                    />
                                    <img
                                        src='https://www.mil.gov.ua/img/socialicons/youtube.png'
                                        alt=""
                                        height='30'
                                        width='30'
                                        className='p-1'
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>НАШІ ПАРТНЕРИ</h3>
                                <ul>
                                    <li><a href="#">АрміяІNFORM</a></li>
                                    <li><a href="#">Військове радіо АрміяFM</a></li>
                                    <li><a href="#">Пресцентр ООС</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <img
                                    src='https://d2kq0urxkarztv.cloudfront.net/5538e4cf1290a7776bb2866e/1688584/upload-2bc76afe-404d-4165-a3a6-d6690616dbb8.png?w=192&e=webp'
                                    alt=""
                                    height='60'
                                    width='60'
                                />
                                <h3>Міністерство оборони України</h3>
                                <p>Зауваження та пропозиції по роботі сайту надсилайте на адресу: webmaster@mil.gov.ua
                                    Запити на отримання публічної інформації надсилайте на адресу: zapytmou@mil.gov.ua</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;