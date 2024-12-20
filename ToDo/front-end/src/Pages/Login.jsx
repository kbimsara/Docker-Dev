import { React, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js';

import './Login.css';
import HomeNav from '../Component/Home/HomeNav';

function Login() {
    const url = "http://localhost:5000/api/user/login";
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    function submit(e) {
        e.preventDefault();
        const result = axios.post(url, {
            email: data.email,
            pw: data.password
        }).then(
            res => {
                console.log(res.data)
                const usermail = data.email;

                // Save to Local Storage
                localStorage.setItem("mail", usermail);

                navigate('/userPage');

            }
        ).catch(err => {
            Swal.fire({
                title: 'Something went wrong',
                text: err,
                icon: 'error'
            })
        })


    }
    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    return (
        <>
            <HomeNav />
            <Container fluid className='bg-dark justify-content-md-center text-light bg'>
                <Row className="justify-content-md-center">
                    <Col xs="12" sm="12" md="4" xl="4" xxl="3">

                        <h1>Login</h1>
                        <Form className='bg-login' onSubmit={(e) => submit(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => handle(e)} id='email' value={data.email} />
                                <span className='txt-span'>We'll never share your Data with anyone else.</span>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => handle(e)} id='password' value={data.password} />
                                <span className='txt-span'>We'll never share your Data with anyone else.</span>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <center>
                                        <Button variant="primary" size="sm" className='btn-2' type='submit'>
                                            Login
                                        </Button>
                                        {/* <a href="/userPage">
                                        </a> */}
                                    </center>
                                </Col>
                                <Col>
                                    <center>
                                        <a href="/createacc">
                                            <Button variant="secondary" size="sm" className='btn-2'>
                                                Create Account
                                            </Button>
                                        </a>
                                    </center>
                                </Col>
                            </Row>
                            {/* <div className="d-grid gap-1">
                            </div> */}
                        </Form>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default Login
