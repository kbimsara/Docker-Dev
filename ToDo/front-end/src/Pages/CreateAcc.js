import { React, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import Swal from 'sweetalert2/dist/sweetalert2.js';
import HomeNav from '../Component/Home/HomeNav';
import './CreateAcc.css';

function CreateAcc() {

    const url = "http://localhost:80/api/user";
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })
    function submit(e) {
        e.preventDefault();
        if (data.password == data.password2) {
            const result = axios.post(url, {
                name: data.name,
                email: data.email,
                pw: data.password
            }).then(
                res => {
                    // console.log(res.data)
                    Swal.fire({
                        title: 'Account Created',
                        icon: 'success'
                    })
                    navigate('/login');

                }
            ).catch(err => {
                Swal.fire({
                    title: 'Something went wrong',
                    text: err,
                    icon: 'error'
                })
            })
        }else{
            Swal.fire({
                title: 'Password Error',
                text: "Password Fields Missmatched !",
                icon: 'error'
            })
        }

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

                        <h1>Create Account</h1>
                        <Form className='bg-login' onSubmit={(e) => submit(e)}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => handle(e)} id='name' value={data.name} />
                                <span className='txt-span'>Ex: 'Jhone Wick'</span>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => handle(e)} id='email' value={data.email} />
                                <span className='txt-span'>Ex: 'jhonewick@mail.com'</span>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => handle(e)} id='password' value={data.password} />
                                <span className='txt-span'>Ex: 'asdf@1212'</span>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword2">
                                <Form.Label>Re-Password</Form.Label>
                                <Form.Control type="password" placeholder="Re-Password" onChange={(e) => handle(e)} id='password2' value={data.password2} />
                                <span className='txt-span'>Ex: 'asdf@1212'</span>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <center>
                                        <Button variant="primary" size="sm" className='btn-2' type='submit'>
                                            Create Account
                                        </Button>
                                    </center>
                                </Col>
                                <Col>
                                    <center>
                                        <a href="/login">
                                            <Button variant="secondary" size="sm" className='btn-2'>
                                                Login
                                            </Button>
                                        </a>
                                    </center>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default CreateAcc
