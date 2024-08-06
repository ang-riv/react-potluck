import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// displays the assigned recipe cards in AssignDishes
function DisplayRecipes(props) {
  // destructure to use directly
  const { dishes } = props;

  const assignedDishes = [...dishes];
  const recipeCards = assignedDishes.map((cardInfo, i) => (
    <Col xs={12} md={6} lg={4} key={i}>
      <Card className="text-center m-2">
        <Card.Header>
          <span className="fw-bold">{cardInfo.guest}</span> is bringing:
        </Card.Header>
        <Card.Img
          className="border-bottom"
          variant="top"
          src={cardInfo.image}
        />
        <Card.Body>
          <Card.Title>{cardInfo.title}</Card.Title>
          <a
            href={cardInfo.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-3 py-1 button-styles">See Recipe</button>
          </a>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <div className="scrollable-div recipes-div-height">
      <Row>{recipeCards}</Row>
    </div>
  );
}

export default DisplayRecipes;
