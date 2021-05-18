import React, { useState, useCallback } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../Ui/Inputs/Input";
import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/use-form";
import BootstrapButton from "../../Ui/Button/BootstrapButton";
import DeleteIcon from "../../assets/deleteIcon";
import EditIcon from "../../assets/editIcon";
import * as Subforms from "./SubForms";
import { REMOVESTYLES } from "../../store/actionTypes";
import { loadingItem, removeStyle, updateStyle } from "../../store/action";
import { apiresquests } from "../../api/api";
import Loader from "../../Ui/Loader/Loader";


const EditUtechForm = () => {
  const dispatch = useDispatch();
  const stylesSubmited = useSelector((state) => state.styles);
  const location = useLocation();
  const queryParams = new URLSearchParams(location);
  const UniqueId = queryParams.get("search").replace("?", "");

  const [values, handlechange] = useForm({});
  const loading = useSelector((state) => state.loading);
  const [edit, setEdit] = useState(false);
  const [updatedFormValues, setUpdatedFormValues] = useState(null);

  const currentItemObj = stylesSubmited.filter((item) => {
    return item.unique_id === UniqueId;
  });

  const { Source, type } = {
    Source: currentItemObj.map((item) => item.source),
    type: currentItemObj.map((item) => item.element_type),
  };

  const currentItemObjClone = JSON.parse(JSON.stringify(currentItemObj));

  const excludedItemsArray = currentItemObjClone.filter((item) => {
    return (
      delete item.source &&
      delete item.unique_id &&
      delete item.element_type &&
      delete item.created_at &&
      delete item.updated_at &&
      delete item._id &&
      delete item.__v
    );
  });


  const handelEdit = () => {
    setEdit(true);
  };

  const getValuesfromType = async (val) => {
    const source = Source.toString();
    const element_type = type.toString();
    const updatedValues = Object.assign(
      {
        unique_id: UniqueId,
        source,
        element_type,
        plot_details: { plot_width: 0 },
      },
      Object.assign(values, val)
    );
    await setUpdatedFormValues(updatedValues);
  };

  const handelRenderSubForm = () => {
    const EditableForm = Subforms[type.toString()];
    console.log(type.toString());
    if (EditableForm !== undefined) {
      return <EditableForm  onSaveHandler={getValuesfromType} />;
    } else {
      return;
    }
  };


  const updateHandler = async () => {
    const updateFormData = apiresquests(
      "v1/styles/update",
      "POST",
      updatedFormValues
    );

    dispatch(loadingItem());
    await updateFormData
      .then((response) => {
        console.log("after update>>>", response);
        console.log("uniqueid in updated form>>>", updatedFormValues.unique_id);
        if (response.status === 200) {
          dispatch(updateStyle(updatedFormValues));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handelDelete = async () => {

    const deleteFormData = apiresquests("v1/styles/delete", "POST", {
      unique_id: UniqueId,
    });

    dispatch(loadingItem());
    await deleteFormData
      .then((response) => {
        console.log("after update>>>", response.status);
        if (response.status === 200) {
          dispatch(removeStyle(UniqueId));
        }
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <Form>
      {loading && <Loader />}
      <div>
        <Col md={{ span: 4, offset: 10 }}>
          <div
            className="d-flex justify-content-evenly w-50 lg-2"
            style={{ cursor: "pointer" }}
          >
            {!edit ? (
              <p onClick={handelEdit}>
                <EditIcon />
              </p>
            ) : (
              <BootstrapButton onClick={updateHandler}>Update</BootstrapButton>
            )}
            {!edit ? (
              <p onClick={handelDelete}>
                <DeleteIcon />
              </p>
            ) : (
              <BootstrapButton className="mx-3">Cancel</BootstrapButton>
            )}
          </div>
        </Col>
        {edit ? (
          <Row>
            <Col className="my-2" xs="9" md="6">
              <Input
                Input={{
                  type: "text",
                  Label: "Source",
                  placeholder: "",
                  name: "",
                  disabled: true,
                  onChange: handlechange,
                  value: Source.toString(),
                }}
              />
            </Col>
            <Col className="my-2" xs="9" md="6">
              <Input
                Input={{
                  type: "text",
                  Label: "Element Type",
                  placeholder: "",
                  disabled: true,
                  name: "",
                  onChange: handlechange,
                  value: type.toString(),
                }}
              />
            </Col>
            <Col className="my-2" xs="9" md="6">
              <Input
                Input={{
                  type: "text",
                  Label: "Unique ID",
                  placeholder: "",
                  name: "uniqueid",
                  disabled: true,
                  onChange: handlechange,
                  value:UniqueId ,
                }}
              />
            </Col>
          </Row>
        ) : (
          <Row className="d-flex my-3 m-3 flex-row justify-content-around">
            <Col className="d-flex flex-column">
              <Form.Text>Source</Form.Text>
              <Form.Label className="my-3">{Source.toString()}</Form.Label>
            </Col>
            <Col className="d-flex flex-column">
              <Form.Text>Element Type</Form.Text>
              <Form.Label className="my-3">{type.toString()}</Form.Label>
            </Col>
            <Col className="d-flex flex-column">
              <Form.Text>Unique ID</Form.Text>
              <Form.Label className="my-3">{UniqueId}</Form.Label>
            </Col>
          </Row>
        )}

        {!edit
          ? excludedItemsArray.map((item, idx) => {
              return (
                <div className="d-flex justify-content-between  w-80 flex-wrap">
                  {Object.entries(item).map(([key, value]) => {
                    if (typeof value !== "object") {
                      console.log(key, value);
                      return (
                        <Row className="m-3">
                          <Col md="8" xs="10">
                            <Form.Text>{key}</Form.Text>
                            <Form.Label className="my-3">{value}</Form.Label>
                          </Col>
                        </Row>
                      );
                    }
                  })}
                </div>
              );
            })
          : handelRenderSubForm()}
      </div>
    </Form>
  );
};

export default EditUtechForm;
