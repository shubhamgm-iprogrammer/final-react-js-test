import Dropdown from "../../Ui/DropDown/DropDown";
import React, { useState, useCallback } from "react";
import { Col, Row, Form } from "react-bootstrap";
import Input from "../../Ui/Inputs/Input";
import { useForm } from "../../hooks/use-form";
import BootstrapButton from "../../Ui/Button/BootstrapButton";
import { useDispatch, useSelector } from "react-redux";
import * as SubForms from "./SubForms";
import { apiresquests } from "../../api/api";
import { addStyle, loadingItem } from "../../store/action";
import { useHistory, useRouteMatch } from "react-router-dom";
import Loader from "../../Ui/Loader/Loader";

const DUMMY_ELEMENT = [
  { id: "el1", type: "Door" },
  { id: "el2", type: "columns" },
  { id: "el3", type: "Roof" },
  { id: "el4", type: "Grill" },
  { id: "el5", type: "Gates" },
  { id: "el6", type: "Porch" },
  { id: "el7", type: "Compoundwall" },
  { id: "el8", type: "Staircase" },
  { id: "el9", type: "window" },
];

const DUMMY_SOURCE = [
  { id: "s1", type: "styles Gallery" },
  { id: "s2", type: "crowd source" },
  { id: "s3", type: "campaigns" },
];

const UtechForm = (props) => {

  const [values, handlechange] = useForm({});

  const dispatch = useDispatch();
  const match = useRouteMatch();
  const [Source, setSource] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [formvaluesAfterSubmit, setFormValuesAfterSubmit] = useState("");
  const styles = useSelector((state) => state.styles);
  const loading = useSelector((state) => state.loading);
  const history = useHistory();

  const UniqueIdPayload = (Src) => {
    let srcCode = null;
    if (Src === "styles Gallery") {
      srcCode = "SG";
    }
    if (Src === "crowd source") {
      srcCode = "SC";
    }
    if (Src === "campaigns") {
      srcCode = "C";
    }

    console.log("my srcCode>>>", srcCode);
    return {
      source: srcCode,
      event_for: "styles",
    };
  };

  const generateUniqueId = document.getElementById("uniqueId");

  const handleSourcechange = async (e) => {
    setSource({ [e.target.name]: e.target.value });

    const payloadSrcCode = UniqueIdPayload(e.target.value);

    const fetchUniqueId = apiresquests(
      "v1/generateUniqueId",
      "POST",
      payloadSrcCode
    );

    if (generateUniqueId !== null) {
      generateUniqueId.textContent = "Fetching...";
    }

    fetchUniqueId
      .then((response) => {
        console.log(response);
        setUniqueId(response.data.payload.join());
        generateUniqueId.textContent = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeFormOption = useCallback(
    (val) => {
      const formValues = Object.assign(
        { unique_id: uniqueId },
        { plot_details: { plot_width: 0 } },
        Object.assign(Source, Object.assign(values, val))
      );
      console.log("my form values>>>>",formValues);
      setFormValuesAfterSubmit(formValues);
    },
    [values.element_type]
  );

  const handleSave = async () => {
    const saveFormData = apiresquests(
      "v1/styles/add",
      "POST",
      formvaluesAfterSubmit
    );

    dispatch(loadingItem());
    await saveFormData
      .then((response) => {
        dispatch(addStyle(response));
        history.push({
          pathname: "/editStyle/uniqueId",
          search: `${uniqueId}`,
        });
      })
      .catch((error) => {
        console.log("error recieved >>>", error.message);
      });
    props.onSaveForm();
  };

  const renderSubForm = useCallback(() => {
    const Subform = SubForms[values.element_type];
    if (Subform !== undefined) {
      return <Subform onSaveHandler={changeFormOption} />;
    } else {
      return;
    }
  }, [values.element_type]);

  return (
    <Form>
      {loading && <Loader />}
      <Col md={{ span: 4, offset: 9 }}>
        <BootstrapButton
          disabled={
            (!Source && !uniqueId) || !values.element_type ? true : false
          }
          style={{ backgroundColor: "#5C4EBF", width: "6.5rem" }}
          size="md"
          onClick={handleSave}
        >
          Save
        </BootstrapButton>
        <BootstrapButton
          style={{
            backgroundColor: "white",
            width: "6.5rem",
            color: "#5C4EBF",
          }}
          className="bg-light mx-3"
          size="md"
        >
          Cancel
        </BootstrapButton>
      </Col>
      <Row>
        <>
          <Col className="my-3" xs={9} md={6}>
            <Dropdown
              name="source"
              onChange={handleSourcechange}
              Label="source"
              data={DUMMY_SOURCE}
            />
            <p className="text-danger">{!Source ? "Please Select Source" : ""}</p>
          </Col>
          <Col className="my-3" xs={9} md={6}>
            <Dropdown
              name="element_type"
              onChange={handlechange}
              disabled={!Source || !uniqueId ? true : false}
              Label="Element Type"
              data={DUMMY_ELEMENT}
            />
             <p className="text-danger">{!values.element_type ? " Please Select Element Type" : ""}</p>
          </Col>
        </>
        <>
          <Col className="my-2" xs="9" md="6">
            <Input
              Input={{
                type: "text",
                Label: "UniqueId",
                placeholder: "",
                name: "unique_id",
                onChange: handlechange,
                value: uniqueId,
              }}
            />
            <p id="uniqueId"></p>
          </Col>
          <Col className="my-2" xs="9" md="6">
            <Input
              Input={{
                type: "text",
                Label: "Element Name",
                name: "element_name",
                onChange: handlechange,
                placeholder: "",
              }}
            />
          </Col>
        </>
      </Row>
      <div className="my-5">{renderSubForm()}</div>
    </Form>
  );
};

export default UtechForm;
