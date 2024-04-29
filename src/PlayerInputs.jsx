import { useState, useReducer } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";

const initialStats = {
    health: 3,
    attach: 3,
    speed: 2,
};

const reducerForStats = (state, action) => {
    switch (action.type) {
        case "setHealth":
            return { ...state, health: action.sliderValue };
        case "setAttack":
            return { ...state, attack: action.sliderValue };
        case "setSpeed":
            return { ...state, speed: action.sliderValue };
        default:
            return state;
    }
}

function PlayerInputs() {
    const [name, setName] = useState("");
    const [state, dispatch] = useReducer(reducerForStats, initialStats);

    const handleNameChange = ((event) => {
        setName(event.target.value);
        onNameChange(event.target.value); //This keeps the parent/child info on same page?
    });

    const 
    
    const handleSliderChange = (type, value) => {
        if (value >= 1 && value <= 8) {
            dispatch({ type: type, sliderValue: value });
        }
    };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Form>
        <Form.Check type="radio" label="Male" name="radioGroup" id="option1" />
        <Form.Check
          type="radio"
          label="Female"
          name="radioGroup"
          id="option2"
        />
      </Form>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Next />
      </Pagination>
      <Card.Body>
        <Card.Title>
          <Form>
            <Row>
              <Col>
                <p>Player Name :</p>
                <Form.Control placeholder="ex. Wolverine" value={name} onChange={handleNameChange} />
                <Button variant="outline-danger">Random</Button>
              </Col>
            </Row>
          </Form>
        </Card.Title>
        <Card.Text>
          Background story stored in array that can be toggled through or just
          randomly generated.
        </Card.Text>
        <Pagination>
          <Pagination.Prev />
          <Pagination.Next />
        </Pagination>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <Card.Body>
          <p>Stats must add up to 10</p>
        </Card.Body>
        <ListGroup.Item>
          <Form.Label>Health :</Form.Label>
          <Form.Range
            min={1}
            max={8}
            value={state.health}
            onChange={(event) =>
              handleSliderChange("setHealth", parseInt(event.target.value))
            }
          />{" "}
          {/* Sliders return string numbers */}
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Label>Attack :</Form.Label>
          <Form.Range
            min={1}
            max={8}
            value={state.attack}
            onChange={(event) =>
              handleSliderChange("setAttack", parseInt(event.target.value))
            }
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Label>Speed :</Form.Label>
                  <Form.Range
                      min={1}
                      max={8}
                      value={state.speed}
                      onChange={(event) =>
                          handleSliderChange("setSpeed", parseInt(event.target.value))} />
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="outline-dark">Randomize Stats</Button>
      </Card.Body>
      <Button variant="outline-success">Submit</Button>
    </Card>
  );
}

export default PlayerInputs;
