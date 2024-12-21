import React from 'react'

import HomeNav from '../Component/Home/HomeNav'

import HomeFooter from '../Component/Home/HomeFooter';
import ImageBanner from '../Component/Home/ImageBanner';
import { Col, Container, Row, Button } from 'react-bootstrap';

import './Home.css';

import ImgPage from '../Component/Home/ImgPage';


export default function Home() {
  return (
    <>
      <HomeNav />
      <ImageBanner />
      <Container fluid className='bg-dark justify-content-md-center text-light'>
        <Row className="justify-content-md-center row-1">
          <Col lg="12">
            <center>
              <h2 className='subHeader-1'>Effortless Note-Taking and Seamless Sketching</h2>
            </center>
          </Col>
          <Col lg="12">
            <center>
              <p>Unlock a new level of productivity and creativity with Notesketch, the ultimate note-taking app. Embrace the power of effortless note-taking, seamlessly integrated sketching, and swift organization—all in one intuitive platform.</p>

              <a href="/createacc">
                <Button variant="secondary" size="sm">
                  Create Account
                </Button>
              </a>
            </center>
          </Col>
        </Row>
        <Row className="justify-content-md-center row-2 text-dark bg-white">
          <Col>
            <center>
              <ImgPage />
            </center>
          </Col>
          <Col>
            <h2 className='subHeader-2'>Easy to Share and Manage Notes.</h2>
            <p>Experience a new dimension of convenience with Notesketch, where sharing and managing your notes becomes a breeze.</p>
          </Col>
        </Row>
        <HomeFooter />
      </Container>
    </>
  )
}
