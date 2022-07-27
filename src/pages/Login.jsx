import React, { useRef, useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function Login() {
    const navigate = useNavigate();

    const emailField = useRef("");
    const passwordField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const userToLoginPayload = {
                email: emailField.current.value,
                password: passwordField.current.value,
            };

            const loginRequest = await axios.post(
                "http://localhost:2000/auth/login",
                userToLoginPayload
            );

            const loginResponse = loginRequest.data;

            if (loginResponse.status) {
                localStorage.setItem("token", loginResponse.data.token);

                navigate("/filter");
            }
        } catch (err) {
            console.log(err);
            const response = err.response.data;

            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };

    const onLoginGoogleSuccess = async (credentialResponse) => {
        try {
            const userToLoginPayload = {
                google_credential: credentialResponse.credential,
            };

            const loginGoogleRequest = await axios.post(
                "http://localhost:2000/auth/login-google",
                userToLoginPayload
            );

            const loginGoogleResponse = loginGoogleRequest.data;

            if (loginGoogleResponse.status) {
                localStorage.setItem("token", loginGoogleResponse.data.token);

                navigate("/filter");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container className="my-5 w-25">
            <h1 className="mb-3 text-center">Sign In</h1>
            <Form onSubmit={onLogin}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        ref={emailField}
                        placeholder="Masukkan Email"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        ref={passwordField}
                        placeholder="Masukkan Password"
                    />
                </Form.Group>
                <p>
                    Belum punya akun? Silahkan {" "}
                    <Link to="/register" className="text-decoration-none">
                        Sign up
                    </Link>
                </p>
                {errorResponse.isError && (
                    <Alert variant="danger">{errorResponse.message}</Alert>
                )}
                <div className="text-center d-flex">
                    <Button className="w-100 text-center" type="submit">
                        Log in
                    </Button>
                </div>

                <p className="text-center my-3"> -or- </p>

                <div className="my-3 text-center">
                    <GoogleOAuthProvider clientId="108939550557-5bq4lerg3l51311ea8sh2ujqk9ju6ijq.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={onLoginGoogleSuccess}
                            onError={() => {
                                console.log("Login Failed");
                            }}
                        />
                    </GoogleOAuthProvider>
                </div>
            </Form>
        </Container>
    );
}
