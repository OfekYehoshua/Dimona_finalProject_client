import React from "react";
import EditUserModal from "../../Components/Modals/editUserModal";
import Navtop from "../../Components/navigate/Navtop";
import "./User.css";
const User = () => {
  const userLogged = JSON.parse(localStorage.getItem("UserLogged"));
  return (
    <div className="user-page-container">
      <Navtop notForm={true} title="האיזור האישי" link="/" />
      <div>
        <div className="top">
          <div className="user-info">
            <h1 style={{ color: "white", fontWeight: "600", marginBottom: 30 }}>
              {userLogged?userLogged.firstName:"אורח"}
            </h1>
            <p style={{ color: "white", fontWeight: "600" }}> {userLogged&&userLogged.email}</p>
            <p style={{ color: "white", fontWeight: "600" }}>0{userLogged&&userLogged.phone}</p>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            textAlign: "right",
            background: "royalblue",
            paddingRight: 20,
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <EditUserModal />
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default User;
