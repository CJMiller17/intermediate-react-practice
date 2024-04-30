import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function PlayerCard({playerName, playerHealth}) {
  return (
    <Card style={{width: "10rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{playerName}</Card.Title>
        <Card.Text>
          Sob story about how this schmuck became an enviable hero.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Health : {playerHealth}</ListGroup.Item>
        <ListGroup.Item>Attack : 0</ListGroup.Item>
        <ListGroup.Item>Speed : 0</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default PlayerCard;
