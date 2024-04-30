import React, { useState, useReducer, useContext, useEffect } from "react";
import { NewPlayerContext } from './main';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";

//These are the initial stats of the player, which are updated via the sliders through the reducer function
const initialStats = {
    health: 3,
    attach: 3,
    speed: 2,
};

//This the reducer constant that keeps track of state and receives the info from the completed action
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

//This massive function has several state variables, listeners, and inputs that communicate
function PlayerInputs() {
    //This "pulls in" the array and setArray from main.jsx through the context provider
    const { newPlayerArray, setNewPlayerArray} = useContext(NewPlayerContext);
    
    //This sets state for the name variable to keep track of it
    const [name, setName] = useState("");
    
  //This is the reducer function that has initialStats for the starting state. It then dispatches
  //an action to be run through the reducerForStats const which is switchCase.
    const [state, dispatch] = useReducer(reducerForStats, initialStats);
  
  //This useEffect clearly wasn't doing anything
  /*
  useEffect(() => {
    console.log("new Player name: ", newPlayerArray);
  }, [newPlayerArray])
  */
  
    //Updates the name through setName to the value of the input field, letter by letter
    const handleNameChange = ((event) => {
        setName(event.target.value);
        console.log("Input Name: ", name);
    });

  //The type is a string that is passed to the switch case. The slider value 
  //is passed to update the corresponding stat
    const handleSliderChange = (type, value) => {
      //The if statement is not strictly necessary but can prevent bugs as a guardian function
      if (value >= 1 && value <= 8) {
        dispatch({ type: type, sliderValue: value });
      }
    };

    //Runs when submit button is pressed
    const handleSubmit = () => {
      //Actually uses the array that was "pulled in". Opens it up and passes object key:value pairs.
      //Truth be told, I don't fully understand this, because I can't "see" the arrays creation
      //This uses the spread operator to create a copy pof the existing array, open it up, and insert a new object in it
      setNewPlayerArray([...newPlayerArray, { name: name, health: state.health, attack: state.attack, speed: state.speed}]);
      //Create an id in the global state and then bump the number by one.
    
      //Clears input field after submission
        setName("");
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
                <Form.Control
                  placeholder="ex. Wolverine"
                  //Why is name used and not setName?
                  value={name}
                  onChange={handleNameChange}
                />
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
            //Where is the state object? I just get confused by what I can't "see"
            value={state.health}
            onChange={(event) =>
              handleSliderChange("setHealth", parseInt(event.target.value))
            }
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Label>Attack :</Form.Label>
          <Form.Range
            min={1}
            max={8}
            //Where is the state object? I just get confused by what I can't "see"
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
            //Where is the state object? I just get confused by what I can't "see"
            value={state.speed}
            onChange={(event) =>
              handleSliderChange("setSpeed", parseInt(event.target.value))
            }
          />
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="outline-dark">Randomize Stats</Button>
      </Card.Body>
      <Button variant="outline-success" onClick={handleSubmit}>
        Submit
      </Button>
    </Card>
  );
}

export default PlayerInputs;
