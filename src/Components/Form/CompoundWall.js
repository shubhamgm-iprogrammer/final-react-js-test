import React, { useEffect } from 'react'
import { useForm } from '../../hooks/use-form'
import { Col, Row ,Form} from 'react-bootstrap'
import  BootstrapButton  from "../../Ui/Button/BootstrapButton"

import  Dropdown  from "../../Ui/DropDown/DropDown"
import Input from '../../Ui/Inputs/Input'


export default({onSaveHandler}) => {
    
    const[values,handlechange] = useForm({})


    useEffect(() => {
        console.log(values)
        onSaveHandler(values)
    },[values])

    console.log(values)
    return (
        <Form>
        <Row>
        <>
        <Col className="my-2" xs={9} md={6}>
        <Dropdown  name="Type" onChange={handlechange}  Label="style" data={[]}/>
        </Col>
        <Col className="my-2" xs={9} md={6}>
        <Dropdown name="Type" onChange={handlechange} Label="shape" data={[]}/>
        </Col>
        </>
        <>
        <Col className="my-2" xs= "9" md= "6">
        <Dropdown name="material" onChange={handlechange} Label="Material" data={[]}/>
        </Col>
        <Col className="my-2" xs= "9"md= "6">
        <Dropdown name="privacy" onChange={handlechange} Label="Privacy" data={[]}/>
           </Col>
           </>
        </Row>
        </Form>
    )
}

