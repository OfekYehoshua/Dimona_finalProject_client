import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import "./Drawer.css";
import { AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Drawer = () => {
  const navigate = useNavigate();
  const UserLogged = JSON.parse(localStorage.getItem("UserLogged"));


  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          fixed="top"
          style={{ background: "royalblue", marginLeft: "0px" }}

        >
          <Container id="nav-container">
            <Navbar.Brand id="drawer-header">עיריית דימונה</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <div className="top-nav-container">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={"drawer-inside-header"}
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <div className="header-container">
                  <div
                    className="user-container"
                    onClick={() => navigate("/user")}
                  >
                    <img
                      src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
                      alt="profile"
                      width={60}
                      height={60}
                    />
                    <div>
                      <h2 style={{ color: "white", fontWeight: 600 }}>אורח</h2>
                      <h5 style={{ letterSpacing: 1 }}>אין דיווחים</h5>
                    </div>
                    <AiOutlineLeft style={{ fontSize: 30, color: "white" }} />
                  </div>
                </div>
                <Offcanvas.Body>
                  <ListGroup variant="flush">
                    <div onClick={() => navigate("/")}>
                      <h1
                        style={{
                          fontWeight: 300,
                          color: "white",
                          paddingRight: 20,
                          paddingTop: 10,
                        }}
                      >
                        {" "}
                        עמוד הבית{" "}
                      </h1>
                    </div>
                    {UserLogged && (
                      <div onClick={() => navigate("/my-reports")}>
                        <hr className="underline" />
                        <h1
                          style={{
                            fontWeight: 300,
                            color: "white",
                            paddingRight: 20,
                            paddingTop: 10,
                          }}
                        >
                          הדיווחים שלי
                        </h1>
                      </div>
                    )}
                    <hr className="underline" />
                    <div onClick={() => navigate("/alerts")}>
                      <h1
                        style={{
                          fontWeight: 300,
                          color: "white",
                          paddingRight: 20,
                          paddingTop: 10,
                        }}
                      >
                        מבזקים
                      </h1>
                    </div>
                    <hr className="underline" />
                    <div onClick={() => navigate("/suggestion")}>
                      <h1
                        style={{
                          fontWeight: 300,
                          color: "white",
                          paddingRight: 20,
                          paddingTop: 10,
                        }}
                      >
                        {" "}
                        הצעות לייעול{" "}
                      </h1>
                    </div>
                    <hr className="underline" />
                    <div onClick={() => navigate("/accessibility")}>
                      <h1
                        style={{
                          fontWeight: 300,
                          color: "white",
                          paddingRight: 20,
                          paddingTop: 10,
                        }}
                      >
                        {" "}
                        נגישות
                      </h1>
                    </div>
                    <hr className="underline" />
                    <a
                      className="_nav-link"
                      href="https://www.dimona.muni.il/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <div>
                        <h1
                          style={{
                            fontWeight: 300,
                            color: "white",
                            paddingRight: 20,
                            paddingTop: 10,
                          }}
                        >
                          {" "}
                          לאתר העירייה
                        </h1>
                      </div>{" "}
                    </a>
                    <hr className="underline" />
                  </ListGroup>
                </Offcanvas.Body>
              </div>
              <div
                className="bottom-nav-container"
                onClick={() => navigate("/hazard-type")}
              >
                <div
                  style={{
                    paddingLeft: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{ width: "90%", height: "90%", borderRadius: "50%" }}
                  >
                    <AiOutlinePlus
                      style={{
                        background: "white",
                        borderRadius: "50%",
                        fontSize: 65,
                        border: "2px dashed gray",
                      }}
                    />
                  </div>
                </div>
                <h1 style={{ paddingLeft: 30, fontSize: 40 }}>דיווח חדש</h1>
              </div>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Drawer;
