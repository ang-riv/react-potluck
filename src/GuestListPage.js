import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

function GuestListPage(props) {
  //const names = displayNames();
  return (
    <Container
      fluid
      className="container-breakpoint d-flex justify-content-center align-items-center flex-column main-container-border py-3 px-4 rounded"
    >
      <Row className="my-3">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-center">
              <h4 className="text-center">Enter the name of each guest:</h4>
            </Form.Label>
            <Stack direction="horizontal" gap={3}>
              <Form.Control
                className="me-auto"
                placeholder="Enter name here..."
              ></Form.Control>
              <button className="px-3 py-1 button-styles">Submit</button>
            </Stack>
          </Form.Group>
        </Form>
      </Row>
      <Row className="mb-1">
        <h4>Sending invites to...</h4>
      </Row>
      {/*names*/}
      <Container className="d-flex justify-content-center align-items-center">
        <button
          className="mt-4 px-5 py-2 button-styles"
          onClick={props.onClick}
        >
          Assign Dishes
        </button>
      </Container>
    </Container>
  );
}

export default GuestListPage;
