import React,{useEffect} from 'react'
import { useForm } from '../../hooks/use-form'
import { Col, Row ,Form} from 'react-bootstrap'
import  BootstrapButton  from "../../Ui/Button/BootstrapButton"

import  Dropdown  from "../../Ui/DropDown/DropDown"
import Input from '../../Ui/Inputs/Input'


export default ({onSaveHandler}) => {

    const[values,handlechange] = useForm({})
    
    useEffect(() => {
        onSaveHandler(values)
    },[values])
    
    
    return (
        <Form>
        <Row>
        <>
        <Col className="my-2" xs={9} md={6}>
        <Dropdown  name="style" onChange={handlechange}  Label="style" data={[]}/>
        </Col>
        <Col className="my-2" xs={9} md={6}>
        <Dropdown name="railingstyle" onChange={handlechange} Label="Railing Style" data={[]}/>
        </Col>
        </>
        <>
        <Col className="my-2" xs= "9" md= "6">
        <Dropdown name="staircasematerial" onChange={handlechange} Label="Staircase Material" data={[]}/>
        </Col>
        <Col className="my-2" xs= "9"md= "6">
        <Dropdown name="railingmaterial" onChange={handlechange} Label="Railing Material" data={[]}/>
         </Col>
        </>
        <>
        <Col className="my-2" xs= "9" md= "6">
        <Dropdown name="shape" onChange={handlechange} Label="Shape" data={[]}/>
        </Col>
        <Col className="my-2" xs= "9"md= "6">
        <Dropdown name="construction" onChange={handlechange} Label="Construction" data={[]}/>
         </Col>
           </>
        </Row>
        </Form>
    )
}

