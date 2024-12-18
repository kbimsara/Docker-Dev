import React from 'react'

import Card from 'react-bootstrap/Card'
import { Row, Col, Button } from 'react-bootstrap';

import './Crd.css';

export default function Crd(props) {
  const colr = ['Success', 'Secondary'];
  const stat = props.stat;
  let i = 0;
  let btn = "";
  if (stat) {
    i = 1;
  } else {
    i = 0;
  let btn = "disabled";
  }
  const variant = colr[i];
  // console.log(stat);
  return (
    <>
      <Card
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        // style={{ minWidth: '18rem' }}
        className="mb-2">
        <Card.Body>
          <Card.Title className='crd-Title'>{props.task}</Card.Title>
          <center>
            <Row>
              <Col>
                <Button variant="info" onClick={props.onDone} disabled={props.stat}>Set Done</Button>
              </Col>
              <Col>
                <Button variant="danger" onClick={props.onDelete}>Delete</Button>
              </Col>
            </Row>
          </center>
        </Card.Body>
      </Card>
    </>
  )
}
