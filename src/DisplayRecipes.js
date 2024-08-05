import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// displays the assigned recipe cards in AssignDishes
function DisplayRecipes(props) {
  // destructure to use directly
  const { dishes } = props;

  const assignedDishes = [...dishes];
  const recipeCards = assignedDishes.map((name, i) => (
    <Col xs={12} md={6} lg={4} key={i}>
      <Card className="text-center m-2">
        <Card.Header>
          <span className="fw-bold">{name.guest}</span> is bringing:
        </Card.Header>
        <Card.Img className="border-bottom" variant="top" src={name.image} />
        <Card.Body>
          <Card.Title>{name.title}</Card.Title>
          <a href={name.sourceUrl} target="_blank" rel="noreferrer">
            <button className="px-3 py-1 button-styles">See Recipe</button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <div className="scrollable-div recipes-div-height">
      {/* add cols in the same way as DisplayNames*/}
      <Row>{recipeCards}</Row>
    </div>
  );
}

export default DisplayRecipes;
