import React from 'react'
import {Button} from "react-bootstrap"
import styled from "styled-components"


const BootstrapButton = (props) => {

    return (
    <Button type={props.type} disabled={props.disabled} onClick={props.onClick} color={props.color} style={props.style} className={props.className} size={props.size}>
        {props.children}
      </Button>
    )
}

export default BootstrapButton
