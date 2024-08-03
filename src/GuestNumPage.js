import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function GuestNumPage(props) {
  return (
    <Container
      fluid
      className="container-breakpoint main-container-border d-flex align-items-center justify-content-center py-2 rounded"
    >
      {/* main form */}
      <Form className="p-4">
        <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-2">
          <Form.Label>
            <h5 className="text-center mb-3">
              Select the number of guests attending:
            </h5>
          </Form.Label>
          {/* add stack group here maybe */}
          <Col xs={8} className="mb-4">
            <Form.Select>
              <option>Select a number: </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
          <p className="mb-3 px-0">Attending: __ Guests</p>
          <button
            className="mt-3 px-5 py-2 button-styles"
            onClick={props.onClick}
          >
            Submit
          </button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default GuestNumPage;
