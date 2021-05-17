import React from 'react'
import {Form, Row,Col} from "react-bootstrap"

const DropDown = (props) => {
    return (
    <Row className={props.className}>
   <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>{props.Label && props.Label}</Form.Label>
    <Form.Control name={props.name} value={props.value} disabled={props.disabled} onChange={props.onChange} as="select">
      <option value="">please Select</option>
      {props.data && props.data.map(element => {
          return <option>{element.type}</option>
      })}
      </Form.Control>
     </Form.Group>
     </Row>
    )
}

export default DropDown
