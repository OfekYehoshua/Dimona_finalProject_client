import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../Pages/Home/homeStyle.css";
import { NavLink } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const Drawer = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          fixed="top"
        >
          <Container id="nav-container">
            <Navbar.Brand id="drawer-header">עיריית דימונה</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={"drawer-inside-header"}>
                  תפריט
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <NavLink to={"/"}>פרופיל</NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <NavLink to={"/"}>ראשי</NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <NavLink to={"/"}>הדיווחים שלי</NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <NavLink to={"/"}>ההצעות שלי</NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <NavLink to={"/"}>מבזקים</NavLink>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Nav.Link href="#">התנתקות</Nav.Link>
                  </ListGroup.Item>
                </ListGroup>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">אתר העירייה</Nav.Link>
                  <Nav.Link href="#action1">אתר העוד משהו</Nav.Link>
                </Nav>
                <Button variant="info">דיווח חדש</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Drawer;
