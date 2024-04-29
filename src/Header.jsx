import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar
        className="navbar mb-2"
        bg="black"
        data-bs-theme="dark"
        sticky="top"
      >
        <Container className="d-flex justify-content-between m-0">
          <Link to="/">
            <img src="null"/>
          </Link>
          <Nav className="">
            <Link className="nav-link align-content-center" to="/">
              Current Team
            </Link>
            <Link className="nav-link align-content-center" to="/editTeam">
              Edit Team
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
