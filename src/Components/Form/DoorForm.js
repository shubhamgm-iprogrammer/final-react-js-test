import React,{useEffect} from 'react'
import { Col, Row ,Form} from 'react-bootstrap'
import { useForm } from '../../hooks/use-form'
import  BootstrapButton  from "../../Ui/Button/BootstrapButton"
import  Dropdown  from "../../Ui/DropDown/DropDown"
import DropDownTwo from '../../Ui/DropDown/DropDownTwo'
import Input from '../../Ui/Inputs/Input'
import Subformdata from "../../Utilities/data.json"

export default({onSaveHandler}) => {

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
        <Dropdown  name="style" onChange={handlechange}  Label="style" data={Subformdata.Data.styles}/>
        </Col>
        <Col className="my-2" xs={9} md={6}>
        <Dropdown name="shape" onChange={handlechange} Label="Shape" data={Subformdata.Data.shape}/>
        </Col>
        </>
        <>
        <Col xs= "9" md= "6">
            {/* <DropDownTwo  data={["1"]}/> */}
        </Col>
        <Col className="my-2" xs="9"md= "6">
        <Dropdown name="location" onChange={handlechange} Label="Location" data={Subformdata.Data.location}/>
         </Col>
           </>
        </Row>
        </Form>
    )
}
