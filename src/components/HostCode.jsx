import React from "react";
// import Admin from "./Admin";
import { Link } from "react-router-dom";
import "./hostinfo.css";
function HostCode(props) {
  const adminlink = "http://localhost:3000/" + props.code;

  return (
    <div>
      <div className="code_container">
        <h1>Your code : {props.code}</h1>
        <h3>
          Link :{" "}
          <a
            target="_blank"
            href={"http://localhost:3000/" + props.code + "/client"}
          >
            http://localhost:3000/{props.code + "/client"}
          </a>
        </h3>
        other sharing methods coming soon
      </div>
      <a href={`${props.code}/admin`} className="a">
        Admin page
      </a>
      {/* <Admin rooms={props.rooms} /> */}
    </div>
  );
}

export default HostCode;
