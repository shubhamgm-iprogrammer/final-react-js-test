import React, { useEffect } from 'react'
import { useForm } from '../../hooks/use-form'
import { Col, Row ,Form} from 'react-bootstrap'

import  Dropdown  from "../../Ui/DropDown/DropDown"

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
        <Col className="my-2" xs={9} md={6}>
        <Dropdown name="roof_type" onChange={handlechange} Label="Roof Type" data={[]}/>
        </Col>
        </>
        <>
        <Col className="my-2" xs= "9" md= "6">
        <Dropdown name="material_finish" onChange={handlechange} Label="Material Finish" data={[]}/>
        </Col>
        <Col className="my-2" xs= "9"md= "6">
        <Dropdown name="construction" onChange={handlechange} Label="Construction" data={[]}/>
         </Col>
           </>
        <Col className="my-2" xs= "9"md= "6">
        <Dropdown name="accessible_terrace" onChange={handlechange} Label="Accesible Terrace" data={[]}/>
         </Col>
        </Row>
        </Form>
    )
}
