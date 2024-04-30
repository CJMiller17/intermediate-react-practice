import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

/*
These are basically Reacts version of parameters. The imported component
will look for these to be specified just like a function would expect params
to be passed
*/
function PlayerCard({playerName, playerHealth, playerAttack, playerSpeed}) {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{playerName}</Card.Title>
        <Card.Text>
          Sob story about how this schmuck became an enviable hero.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {/* These values come comes from App.jsx's player card pushes */}
        <ListGroup.Item>Health : {playerHealth}</ListGroup.Item>
        <ListGroup.Item>Attack : {playerAttack}</ListGroup.Item>
        <ListGroup.Item>Speed : {playerSpeed}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default PlayerCard;
