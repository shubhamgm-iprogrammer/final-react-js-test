import React,{useEffect} from 'react'
import { useForm } from '../../hooks/use-form'
import { Col, Row ,Form} from 'react-bootstrap'
import  BootstrapButton  from "../../Ui/Button/BootstrapButton"
import Columndata from "../../Utilities/ColumnsData.json"
import  Dropdown  from "../../Ui/DropDown/DropDown"
import Input from '../../Ui/Inputs/Input'
import columnsData from "../../Utilities/ColumnsData.json"

const ColumnForm = ({onSaveHandler}) => {


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
        <Dropdown  name="style" onChange={handlechange}  Label="style" data={columnsData.data.styles}/>
        </Col>
        <Col className="my-2"xs={9} md={6}>
        <Dropdown name="material_finish" onChange={handlechange} Label="Material Finish" data={columnsData.data.Material}/>
        </Col>
        </>
        </Row>
        </Form>
    )
}

export default ColumnForm
