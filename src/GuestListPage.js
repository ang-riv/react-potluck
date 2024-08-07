import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import MyButton from "./MyButton.js";
import DisplayNames from "./DisplayNames.js";

function GuestListPage(props) {
  //const names = displayNames(props.num);
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
                ref={props.inputRef}
                className="me-auto"
                placeholder="Enter name here..."
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
              ></Form.Control>
              <MyButton
                onClick={props.onClick}
                section="names"
                num={props.num}
                name={props.name}
                innerText="Submit"
              />
            </Stack>
          </Form.Group>
        </Form>
      </Row>
      <Row className="mb-1">
        <h4 className="text-center">
          Sending invites to... <br />
        </h4>
      </Row>
      <DisplayNames guestList={props.guestList} removeName={props.removeName} />
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h5 className="mt-3">
          {props.guestList.length} out of {props.numOfGuests} guests entered.
        </h5>
        <MyButton
          onClick={props.onAssignClick}
          section="assign"
          innerText="Assign Dishes"
          guestList={props.guestList}
        />
      </Container>
    </Container>
  );
}

export default GuestListPage;
