import "./App.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { Navbar, Nav, Container, Button, Row, Col, Card, Accordion } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CarsLogo from "../public/img/img_car.png";
import CheckLogo from "../public/img/Group_53.png";
import CompleteIcon from "../public/img/icon_complete.png";
import ServiceImg from "../public/img/img_service.png";
import PriceIcon from "../public/img/icon_price.png";
import TimeIcon from "../public/img/icon_24hrs.png";
import ProIcon from "../public/img/icon_professional.png";
import Testi1 from "../public/img/img_photo.png";
import Testi2 from "../public/img/img_photo_2.png";
import Testi3 from "../public/img/img_photo_3.png";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import Footer from "../components/Footer";

function Home() {
    const navigate = useNavigate();
    const userRedux = useSelector(selectUser);
    const [user, setUser] = useState(userRedux.creds);

    const styleButton = {
        backgroundColor: "#5cb85f",
        borderColor: "#5cb85f",
        borderRadius: "0px",
    };

    const iconColor = {
        color: "gold",
    };

    const onClickLogin = () => {
        navigate("/filter");
    };

    return (
        <>
            <Navbar fixed="top" className="navbar">
                <Container>
                    <Navbar.Brand href="#home" className="box"></Navbar.Brand>
                    <Button
                        variant="light"
                        size="sm"
                        disabled
                        className="navStyle text-black fw-bold "
                    >
                        {user.name}
                    </Button>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#service" className="navStyle text-black">
                            Our Service
                        </Nav.Link>
                        <Nav.Link href="#why-us" className="navStyle text-black">
                            Why Us
                        </Nav.Link>
                        <Nav.Link
                            href="#testimonial"
                            className="navStyle text-black"
                        >
                            Testimonial
                        </Nav.Link>
                        <Nav.Link href="#faq" className="navStyle text-black">
                            FAQ
                        </Nav.Link>
                        <Nav.Link href="#" className="navStyle text-black">
                            <Link to="/register">
                                <Button variant="success" style={styleButton}>
                                    Register
                                </Button>
                            </Link>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main */}
            <section className="main">
                <Container>
                    <Row>
                        <Col md={6} className="main-text">
                            <p className="title">
                                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                            </p>
                            <p className="content">
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                                Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                            <Button
                                variant="success"
                                style={styleButton}
                                onClick={(e) => onClickLogin(e)}
                            >
                                Mulai Sewa Mobil
                            </Button>
                        </Col>
                        <Col md={6} className="picture">
                            <img src={CarsLogo} alt="llog of cars" />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Main */}


            {/* Service */}
            <section className="service" id="service">
                <Container>
                    <Row className="our-service">
                        <Col md={6} className="img-service">
                            <img src={ServiceImg} className="img-fluid" alt="images" />
                        </Col>
                        <Col md={6} className="text-service">
                            <h3 className="fw-bold">
                                Best Car Rental for any kind of trip in (Lokasimu)!
                            </h3>
                            <p className="pt-3">
                                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                                wedding, meeting, dll.
                            </p>
                            <p>
                                <img src={CheckLogo} alt="images" />
                                <span className="ms-3">
                                    Sewa Mobil Dengan Supir di Bali 12 Jam
                                </span>
                            </p>
                            <p>
                                <img src={CheckLogo} alt="images" />
                                <span className="ms-3">
                                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                                </span>
                            </p>
                            <p>
                                <img src={CheckLogo} alt="images" />
                                <span className="ms-3">Sewa Mobil Jangka Panjang Bulanan</span>
                            </p>
                            <p>
                                <img src={CheckLogo} alt="images" />
                                <span className="ms-3">
                                    Gratis Antar - Jemput Mobil di Bandara
                                </span>
                            </p>
                            <p>
                                <img src={CheckLogo} alt="images" />
                                <span className="ms-3">
                                    Layanan Airport Transfer / Drop In Out
                                </span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Service */}


            {/* Why Us */}
            <section className="why-us" id="why-us">
                <Container>
                    <div className="why-title">
                        <h3 className=" fw-bold">Why Us?</h3>
                        <p>Mengapa harus pilih Binar Car Rental?</p>
                    </div>

                    <div className="why-text d-flex justify-content-center gap-4">
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>
                                    <img src={CompleteIcon} alt="" />
                                </Card.Title>
                                <Card.Subtitle className="my-3 fw-bold ">
                                    Mobil Lengkap
                                </Card.Subtitle>
                                <Card.Text className="card-text">
                                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>
                                    <img src={PriceIcon} alt="" />
                                </Card.Title>
                                <Card.Subtitle className="my-3 fw-bold ">
                                    Harga Murah
                                </Card.Subtitle>
                                <Card.Text className="card-text">
                                    Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>
                                    <img src={TimeIcon} alt="" />
                                </Card.Title>
                                <Card.Subtitle className="my-3 fw-bold ">
                                    Layanan 24 Jam
                                </Card.Subtitle>
                                <Card.Text className="card-text">
                                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>
                                    <img src={ProIcon} alt="" />
                                </Card.Title>
                                <Card.Subtitle className="my-3 fw-bold ">
                                    Sopir Profesional
                                </Card.Subtitle>
                                <Card.Text className="card-text">
                                    Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </section>
            {/* Why Us */}


            {/* Testi */}
            <section className="testimonial" id="testimonial">
                <div className="Testimonial-title text-center" id="Testimonial">
                    <h2 className=" fw-bold">Testimonial</h2>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>

                <OwlCarousel
                    items={2}
                    className="owl-theme"
                    loop
                    nav
                    center
                    margin={10}
                >
                    <Row>
                        <Col>
                            <div className="item">
                                <div className="testi-body">
                                    <div className="card-left img-card">
                                        <img
                                            src={Testi2}
                                            className="rounded-circle"
                                            alt="images"
                                        />
                                    </div>
                                    <div className="card-right">
                                        <div className="faq-icon" style={iconColor}>
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                        </div>
                                        <p>
                                            “Lorem ipsum dolor sit amet, consectetur furete elit, sed
                                            do eiusmod lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”
                                        </p>
                                        <p class="fw-bold">John Dee 32, Bromo</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="item">
                                <div className="testi-body">
                                    <div className="card-left img-card">
                                        <img
                                            src={Testi1}
                                            className="rounded-circle"
                                            alt="images"
                                        />
                                    </div>
                                    <div className="card-right">
                                        <div className="faq-icon" style={iconColor}>
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                        </div>
                                        <p>
                                            “Lorem ipsum dolor sit amet, consectetur furete elit, sed
                                            do eiusmod lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”
                                        </p>
                                        <p class="fw-bold">John Dee 32, Bromo</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="item">
                                <div className="testi-body">
                                    <div className="card-left img-card">
                                        <img
                                            src={Testi3}
                                            className="rounded-circle"
                                            alt="images"
                                        />
                                    </div>
                                    <div className="card-right">
                                        <div className="faq-icon" style={iconColor}>
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                        </div>
                                        <p>
                                            “Lorem ipsum dolor sit amet, consectetur furete elit, sed
                                            do eiusmod lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”
                                        </p>
                                        <p class="fw-bold">John Dee 32, Bromo</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </OwlCarousel>
            </section>
            {/* Testi */}


            <section className="banner">
                <Container>
                    <div className="banner-content text-center text-white">
                        <h3 className=" fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                        </p>

                        <Button
                            variant="success"
                            onClick={(e) => onClickLogin(e)}
                            style={styleButton}
                        >
                            Mulai Sewa Mobil
                        </Button>
                    </div>
                </Container>
            </section>

            <section className="faq" id="faq">
                <Container>
                    <Row>
                        <Col md={5} className="faq-title">
                            <h1 className="fw-bold">Frequently Asked Question</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </Col>
                        <Col md={7}>
                            <Accordion className="faq-content">
                                <Card className="faq-card">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            Apa saja syarat yang dibutuhkan
                                        </Accordion.Header>
                                        <Accordion.Body className="faq-p">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Distinctio tempora ad quibusdam necessitatibus, quod
                                            blanditiis aliquam dolorum illo vel omnis quam? Nam
                                            exercitationem vitae odit sapiente, ab impedit sint
                                            praesentium?
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>

                                <Card className="faq-card">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            Berapa hari minimal sewa mobil lepas kunci?
                                        </Accordion.Header>
                                        <Accordion.Body className="faq-p">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Distinctio tempora ad quibusdam necessitatibus, quod
                                            blanditiis aliquam dolorum illo vel omnis quam? Nam
                                            exercitationem vitae odit sapiente, ab impedit sint
                                            praesentium?
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>

                                <Card className="faq-card">
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                        </Accordion.Header>
                                        <Accordion.Body className="faq-p">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Distinctio tempora ad quibusdam necessitatibus, quod
                                            blanditiis aliquam dolorum illo vel omnis quam? Nam
                                            exercitationem vitae odit sapiente, ab impedit sint
                                            praesentium?
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>

                                <Card className="faq-card">
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            Apakah Ada biaya antar-jemput?
                                        </Accordion.Header>
                                        <Accordion.Body className="faq-p">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Distinctio tempora ad quibusdam necessitatibus, quod
                                            blanditiis aliquam dolorum illo vel omnis quam? Nam
                                            exercitationem vitae odit sapiente, ab impedit sint
                                            praesentium?
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>

                                <Card className="faq-card">
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            Bagaimana jika terjadi kecelakaan
                                        </Accordion.Header>
                                        <Accordion.Body className="faq-p">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Distinctio tempora ad quibusdam necessitatibus, quod
                                            blanditiis aliquam dolorum illo vel omnis quam? Nam
                                            exercitationem vitae odit sapiente, ab impedit sint
                                            praesentium?
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* footer */}
            <Footer />
        </>
    );
}

export default Home;
