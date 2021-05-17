import React,{useEffect} from 'react'
import { useForm } from '../../hooks/use-form'
import { Col, Row ,Form} from 'react-bootstrap'
import  BootstrapButton  from "../../Ui/Button/BootstrapButton"
import  Dropdown  from "../../Ui/DropDown/DropDown"
import Input from '../../Ui/Inputs/Input'

const WindowForm = ({onSaveHandler}) => {

    const [values,handlechange] = useForm({})

    useEffect(() => {
        console.log("i am values>>>",values)
        onSaveHandler(values)
    },[values])


    return (
        <Form>
        <Row>
        <>
        <Col className="my-3" xs={9} md={6}>
        <Dropdown  name="style" onChange={handlechange}  Label="style" data={[]}/>
        </Col>
        <Col className="my-3" xs={9} md={6}>
        <Dropdown name="type" onChange={handlechange} Label="Type" data={[]}/>
        </Col>
        </>
        <>
        <Col className="my-3" xs= "9" md= "6">
        <Dropdown name="material" onChange={handlechange} Label="Material" data={[]}/>
        </Col>
        <Col className="my-3" xs= "9"md= "6">
        <Dropdown name="Shape" onChange={handlechange} Label="Shape" data={[]}/>
         </Col>
           </>
        <Col className="my-3" xs= "9"md= "6">
        <Dropdown name="operation" onChange={handlechange} Label="Operation" data={[]}/>
         </Col>
        </Row>
        </Form>
    )
}

export default WindowForm
