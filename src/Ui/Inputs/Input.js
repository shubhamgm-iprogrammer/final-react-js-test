import React from "react";
import { Form, Row, Col } from "react-bootstrap";


const Input = (props) => {
  return (
    <Row className={props.Input.className}>
      <Col xs={props.Input.xs} md={props.Input.md}>
          <Form.Label>{props.Input.Label}</Form.Label>
          <Form.Control {...props.Input} />
      </Col> 
    </Row>
  );
};


export default Input;
