import { React, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js';

import UserNav from '../Component/UserPage/UserNav'

import './UserHome.css';
import Crd from '../Component/UserPage/Crd'

function UserHome() {
    const email = localStorage.getItem("mail");

    const urlTask = "http://localhost:5000/api/task";

    const navigate = useNavigate();
    const [data, setData] = useState({
        task: ""
    });
    const [task, settask] = useState([]);

    useEffect(() => {
        const url = urlTask + "/" + email;
        axios.get(url)
            .then(res => {
                settask(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [task]);

    function submit(e) {
        e.preventDefault();
        const result = axios.post(urlTask, {
            email: email,
            task: data.task
        }).then(
            res => {
                Swal.fire({
                    title: 'Task Created',
                    icon: 'success'
                })
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

    const setDone = async (id) => {
        const url2=urlTask+"/"+id;
        await axios.put(url2,{
            stat: true
        }) // Use the correct URL with the book ID
          .then((res2) => {
            Swal.fire({
              title: 'Task Done', // Change the success message
              icon: 'success',
            });
          })
          .catch((err) => {
            Swal.fire({
              title: 'Something went wrong',
              text: err,
              icon: 'error',
            });
          });
      };
    const setDelete = async (id) => {
        await axios
          .delete(urlTask+"/"+id) // Use the correct URL with the book ID
          .then((res2) => {
            Swal.fire({
              title: 'Task Deleted', // Change the success message
              icon: 'success',
            });
            // Remove the deleted book from the state
            settask((prevRecords) => prevRecords.filter((record) => record.id !== id));
          })
          .catch((err) => {
            Swal.fire({
              title: 'Something went wrong',
              text: err,
              icon: 'error',
            });
          });
        //   console.log(urlTask+"/"+id);
      };

    return (
        <>
            <UserNav />
            <Container fluid className='bg-dark justify-content-md-center text-light bg'>
                <h1>Hi, {email}</h1>
                <Row className="justify-content-md-center">
                    <Col xs="12" sm="12" md="4" xl="4" xxl="3">
                        <Form className='bg-login' onSubmit={(e) => submit(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter Task Here" onChange={(e) => handle(e)} id='task' value={data.task} />
                                <span className='txt-span'>We'll never share your Data with anyone else.</span>
                            </Form.Group>
                            <center>
                                <Button variant="outline-success" size="sm" className='btn-2' type='submit'>Add</Button>
                            </center>
                            {/* <div className="d-grid gap-1">
                            </div> */}
                        </Form>
                        <Row className="justify-content-md-center">
                            {task.map((r) => (
                                <Col>
                                    <Crd task={r.task} stat={r.stat} id={r.id} onDone={() => setDone(r._id)} onDelete={() => setDelete(r._id)} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserHome
