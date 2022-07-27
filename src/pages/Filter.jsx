import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Navbar, Nav, Container, Button, Row, Col, Form, Card } from "react-bootstrap";
import CarsLogo from "../public/img/img_car.png";
import { BsCalendar3, BsPeopleFill, BsGearFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import Footer from "../components/Footer";

function Filter() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState({});
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    const is_with_driver = useRef();
    const availableAtDate = useRef();
    const availableAtTime = useRef();
    const capacity = useRef();
    const dispatch = useDispatch();

    const styleButton = {
        borderRadius: "0px",
    };

    const searchCar = {
        fontSize: "14px",
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check status user login
                // 1. Get token from localStorage
                const token = localStorage.getItem("token");

                // 2. Check token validity from API
                const currentUserRequest = await axios.get(
                    "http://localhost:2000/auth/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const currentUserResponse = currentUserRequest.data;

                if (currentUserResponse.status) {
                    dispatch(
                        addUser({
                            user: currentUserResponse.data.user,
                            token: token,
                        })
                    );
                    setUser(currentUserResponse.data.user);
                }
            } catch (err) {
                setIsLoggedIn(false);
            }
        };

        fetchData();
    }, []);

    const onFilter = async (e) => {
        e.preventDefault();

        try {
            const dateTime = new Date(
                `${availableAtDate.current.value} ${availableAtTime.current.value}`
            );
            if (dateTime < Date.now()) {
                Swal.fire({
                    title: "Warning!",
                    text: "Tidak bisa memilih tanggal yang sudah lewat",
                    icon: "warning",
                    confirmButtonText: "Ok",
                });
                return;
            }

            const response = await axios.get(
                `http://localhost:2000/cars/filter?is_with_driver=${is_with_driver.current.value
                }&available_at=${dateTime.toISOString()}&capacity=${capacity.current.value
                }`
            );

            //get response data (services>data.getAll)
            const data = await response.data.data.filtered_cars;
            console.log(data);

            setCars(data);
        } catch (err) {
            console.log(err);
            const response = err.response.data;
            console.log(response);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");

        setIsLoggedIn(false);
        setUser({});

        navigate("/");
    };


    return isLoggedIn ? (
        <>
            {/* navbar */}
            <Navbar fixed="top" className="navbar">
                <Container>
                    <Link to="/" className="box me-3"></Link>
                    <Button
                        style={styleButton}
                        size="sm"
                        disabled
                        variant="outline-secondary"
                        className="text-black fw-bold "
                    >
                        {user.name}
                    </Button>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-decoration-none ">
                        <Nav.Link href="#" className="navStyle text-black">
                            Our Service
                        </Nav.Link>
                        <Nav.Link href="#" className="navStyle text-black">
                            Why Us
                        </Nav.Link>
                        <Nav.Link href="#" className="navStyle text-black">
                            Testimonial
                        </Nav.Link>
                        <Nav.Link href="#" className="navStyle text-black">
                            FAQ
                        </Nav.Link>

                        <Nav.Link className="navStyle text-black">
                            <Button
                                variant="danger"
                                onClick={(e) => logout(e)}
                            >
                                Logout
                            </Button>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* navbar */}

            {/* main */}
            <section className="main">
                <Container>
                    <Row>
                        <Col md={6} className="main-text">
                            <p className="title">
                                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                            </p>
                            <p className="content">
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                                kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                        </Col>
                        <Col md={6} className="picture">
                            <img src={CarsLogo} alt="log of cars" />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* main */}

            {/* form */}
            <section className="form">
                <Container style={{ textAlign: "-webkit-center" }}>
                    <Form onSubmit={onFilter} className="d-flex form-content gap-3 px-3">
                        {/* Driver */}
                        <Form.Group className="mb-3 w-25">
                            <Form.Label style={searchCar}>Tipe Driver</Form.Label>
                            <Form.Select style={searchCar} ref={is_with_driver}>
                                <option hidden>Pilih Tipe Driver</option>
                                <option value="true">Dengan Sopir</option>
                                <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                            </Form.Select>
                        </Form.Group>
                        {/* Driver */}

                        {/* Date */}
                        <Form.Group className="mb-3 w-25">
                            <Form.Label style={searchCar}>Tanggal</Form.Label>
                            <input
                                placeholder="Pilih Tanggal"
                                type="date"
                                className="form-control"
                                id="inputDate"
                                ref={availableAtDate}
                            />
                        </Form.Group>
                        {/* Date */}

                        {/* TIme */}
                        <Form.Group className="mb-3 w-25">
                            <Form.Label style={searchCar}>Waktu Jemput/ Ambil</Form.Label>
                            <Form.Select style={searchCar} ref={availableAtTime}>
                                <option hidden>Pilih Waktu</option>
                                <option value="08:00">08:00 WIB</option>
                                <option value="09:00">09:00 WIB</option>
                                <option value="10:00">10:00 WIB</option>
                                <option value="11:00">11:00 WIB</option>
                                <option value="12:00">12:00 WIB</option>
                                <option value="13:00">13:00 WIB</option>
                                <option value="14:00">14:00 WIB</option>
                                <option value="15:00">15:00 WIB</option>
                                <option value="16:00">16:00 WIB</option>
                                <option value="17:00">17:00 WIB</option>
                                <option value="18:00">18:00 WIB</option>
                                <option value="19:00">19:00 WIB</option>
                                <option value="20:00">20:00 WIB</option>
                                <option value="21:00">21:00 WIB</option>
                                <option value="22:00">22:00 WIB</option>
                                <option value="23:00">23:00 WIB</option>
                                <option value="24:00">24:00 WIB</option>
                            </Form.Select>
                        </Form.Group>
                        {/* Time */}

                        {/* Capacity */}
                        <Form.Group className="mb-3 w-25">
                            <Form.Label style={searchCar}>
                                Jumlah Penumpang (Optional)
                            </Form.Label>
                            <Form.Select style={searchCar} ref={capacity}>
                                <option hidden>Jumlah Penumpang</option>
                                <option value="1">1 orang</option>
                                <option value="2">2 orang</option>
                                <option value="3">3 orang</option>
                                <option value="4">4 orang</option>
                                <option value="5">5 orang</option>
                                <option value="6">6 orang</option>
                            </Form.Select>
                        </Form.Group>
                        {/* Capacity */}

                        <Button
                            variant="success"
                            className="mt-3"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </Container>
            </section>
            {/* form */}

            {/* card */}
            <Container>
                <Row>
                    {cars.map((car) => (
                        <Col md={4} key={car.id}>
                            <Card style={{ marginTop: "2rem" }} key={car.id}>
                                <Card.Img
                                    variant="top"
                                    src={car.image}
                                    style={{ width: "100%", height: "250px", alignSelf: "center" }}
                                />

                                <div className="card-body">
                                    <p>
                                        {car.model} / {car.manufacture}
                                    </p>
                                    <h5 className="card-title bold">
                                        Rp {car.rent_per_day} / hari
                                    </h5>
                                    <p
                                        className="card-text"
                                        style={{ height: "100%", textAlign: "justify" }}
                                    >
                                        {car.description}
                                    </p>
                                    <div className="">
                                        <BsPeopleFill className="me-2" />
                                        {car.capacity} Orang
                                    </div>
                                    <div className="pt-2">
                                        <BsGearFill className="me-2" />
                                        {car.transmission}
                                    </div>
                                    <div className="pt-2">
                                        <BsCalendar3 className="me-2" />
                                        Tahun {car.year}
                                    </div>
                                    <Card.Link href="#">
                                        <Button variant="success" className=" w-100 mt-3">
                                            Pilih Mobil
                                        </Button>
                                    </Card.Link>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* card */}

            {/* footer */}
            <Footer />

        </>
    ) : (
        <Navigate to="/login" replace />
    );
}

export default Filter;
