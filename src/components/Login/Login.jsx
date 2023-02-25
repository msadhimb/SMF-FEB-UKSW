import React, { useEffect, useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./Login.css";
import smf from "../../assets/IMG_4288.PNG";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isToken, setIsToken] = useState("");

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        localStorage.setItem("token", res.data);
        toast.success("Login Success");
        setTimeout(() => {
          nav("/");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="login-container">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center login-card-container ">
            <div className="login-card">
              <div className="author-container d-flex justify-content-center">
                <div className="author">
                  <img src={smf} alt="logo" className="img-fluid" />
                </div>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      onChange={handleInputChange}
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
