import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import MyButton from "./MyButton.js";

function GuestNumPage(props) {
  // use an array with map to generate the number options
  const nums = [...Array(20)].map((_, i) => i + 1);
  const options = nums.map((i) => (
    <option key={i} value={i}>
      {i}
    </option>
  ));
  return (
    <Container
      fluid
      className="container-breakpoint main-container-border d-flex align-items-center justify-content-center py-2 rounded"
    >
      {/* main form */}
      <Form className="p-4" onSubmit={props.handleSubmit}>
        <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-2">
          <Form.Label>
            <h5 className="text-center mb-3">
              Select the number of guests attending:
            </h5>
          </Form.Label>
          {/* add stack group here maybe */}
          <Col xs={8} className="mb-4">
            <Form.Select onChange={props.onChange}>
              <option value={0}>Select a number: </option>
              {options}
            </Form.Select>
          </Col>
          <p className="mb-3 px-0">Attending: {props.num} Guests</p>
          <MyButton
            className="mt-3 px-5 py-2 button-styles"
            onClick={props.onClick}
            section="invited"
            num={props.num}
            innerText="Submit Guests"
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default GuestNumPage;
