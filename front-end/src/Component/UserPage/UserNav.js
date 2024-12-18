import React from 'react'
import { Container, Navbar, Nav,Button } from 'react-bootstrap';

export default function UserNav() {
  return (
    <Navbar sticky="top" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="home">To-Do</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <a href="/login"><Button variant="outline-light" size="sm">Logout</Button></a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
