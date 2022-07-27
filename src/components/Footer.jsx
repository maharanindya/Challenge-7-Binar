import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Facebook from "../public/img/icon_facebook.png";
import Instagram from "../public/img/icon_instagram.png";
import Twitter from "../public/img/icon_twitter.png";
import Mail from "../public/img/icon_mail.png";
import Twitch from "../public/img/icon_twitch.png";

function Footer() {
    return (
        <Container>
            <div className="footer">
                <Row>
                    <Col md={4}>
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </Col>
                    <Col md={2} className="footer-link">
                        <p>
                            <a href="#our-service">Our Service</a>
                        </p>
                        <p>
                            <a href="#why-us">Why Us</a>
                        </p>
                        <p>
                            <a href="#testimonial">Testimonial</a>
                        </p>
                        <p>
                            <a href="#faq">FAQ</a>
                        </p>
                    </Col>
                    <Col md={3}>
                        <p>Connect with us</p>
                        <p className="icons">
                            <img src={Facebook} alt="gambar facebook" />
                            <img src={Instagram} alt="gambar insta" />
                            <img src={Twitter} alt="gambar twit" />
                            <img src={Mail} alt="gambar mail" />
                            <img src={Twitch} alt="gambar twitch" />
                        </p>

                    </Col>
                    <Col md={3} className="pd-5">
                        <p>Copyright Binar 2022</p>
                        <p className="box"></p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Footer;
