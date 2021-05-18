import React,{useEffect} from 'react'
import { useForm } from '../../hooks/use-form'
import { Col, Row ,Form} from 'react-bootstrap'
import  BootstrapButton  from "../../Ui/Button/BootstrapButton"
import GateForm from "../../Utilities/GatesData.json"
import  Dropdown  from "../../Ui/DropDown/DropDown"
import Input from '../../Ui/Inputs/Input'
import GatesData from "../../Utilities/GatesData.json"

export default ({onSaveHandler}) => {

    const[values,handlechange] = useForm({})

    useEffect(() => {
        console.log(values)
        onSaveHandler(values)
    },[values])

    return (
        <Form>
        <Row>
        <>
        <Col className="my-2" xs={9} md={6}>
        <Dropdown  name="style" onChange={handlechange}  Label="style" data={GatesData.data.styles}/>
        </Col>
        <Col className="my-2" xs={9} md={6}>
        <Dropdown name="accessibility" onChange={handlechange} Label="Accessibility" data={GatesData.data.accessibility}/>
        </Col>
        </>
        <>
        <Col className="my-2" xs= "9" md= "6">
        <Dropdown name="material" onChange={handlechange} Label="Material" data={GatesData.data.Material}/>
        </Col>
        <Col className="my-2" xs= "9" md= "6">
        <Dropdown name="height" onChange={handlechange} Label="Height" data={GatesData.data.Height}/>
         </Col>
         </>
        <Col className="my-2" xs= "9"md= "6">
        <Dropdown name="operation" onChange={handlechange} Label="Operation" data={GatesData.data.Operation}/>
         </Col>
        </Row>
        </Form>
    )
}