import React, { useEffect } from 'react'
import { useForm } from '../../hooks/use-form'
import { Col, Row ,Form} from 'react-bootstrap'
import  BootstrapButton  from "../../Ui/Button/BootstrapButton"

import  Dropdown  from "../../Ui/DropDown/DropDown"
import Input from '../../Ui/Inputs/Input'


export default ({onSaveHandler}) => {

    const [values,handlechange] = useForm({})
   
    useEffect(() => {
        console.log(values)
        onSaveHandler(values)
    },[values])


    return (
        <Form>
        <Row>
        <>
        <Col className="my-2" xs={9} md={6}>
        <Dropdown  name="style" onChange={handlechange}  Label="style" data={[]}/>
        </Col>
        <Col className="my-2"xs={9} md={6}>
        <Dropdown name="roof_type" onChange={handlechange} Label="Roof Type" data={[]}/>
        </Col>
        </>
        <>
        <Col className="my-2" xs= "9"md= "6">
        <Dropdown name="railing" onChange={handlechange} Label="Railing" data={[]}/>
         </Col>
        </>
        </Row>
        </Form>
    )
}

