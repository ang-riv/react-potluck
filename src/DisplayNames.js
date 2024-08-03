import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CloseButton from "react-bootstrap/CloseButton";

// displays the names of the guests added in GuestListPage
function DisplayNames(props) {
  const removeName = () => {
    console.log(names);
  };
  const list = props.guestList;
  const names = [...list];
  const nameBlocks = names.map((name, i) => (
    <Col xs={12} sm={6} key={i}>
      <Container className="d-flex p-2 mb-3 align-items-center justify-content-center border rounded">
        <p className="m-0 p-0">{name}</p>
        <CloseButton className="ms-auto" onClick={removeName} />
      </Container>
    </Col>
  ));
  return (
    <div className="main-container-border scrollable-div names-div-height p-2 rounded">
      <Row>{nameBlocks}</Row>
    </div>
  );
}

export default DisplayNames;
