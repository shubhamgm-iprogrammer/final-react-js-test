import React from "react"
import {Card} from "react-bootstrap"

const BootstrapCard = props => {
  return (
  <Card style={props.style}>
  <Card.Body>{props.children}</Card.Body>
</Card>
  )
}

export default BootstrapCard;