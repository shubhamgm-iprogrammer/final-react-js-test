import React from 'react'
import {Dropdown} from "react-bootstrap"

const DropDownTwo = (props) => {
    return (
        <>
        {props.data && props.data.map((item,key) => {
            return(
              <Dropdown.item eventKey={key}>{item}</Dropdown.item>
            )
            })}
        </>
    )
}

export default DropDownTwo
