import React from 'react'
import { Container, Navbar, Nav,Button } from 'react-bootstrap';

export default function HomeNav() {
    return (
        <>
            {/* <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-body-tertiary justify-content-center" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="home">To-Do</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto justify-content-center flex-grow-1 pe-3">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}


            <Navbar sticky="top" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="home">To-Do</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        <a href="/login"><Button variant="outline-light" size="sm">Login</Button></a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
