import React from "react";
// import Admin from "./Admin";
import { Link } from "react-router-dom";
import "./Css/hostinfo.css";
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
            https://xiprot-techbell.herokuapp.com/{props.code + "/client"}
          </a>
        </h3>
        other sharing methods coming soon
      </div>
      <a href={`${props.code}/admin`}>
        <button> Go to Admin contol</button>
      </a>
      {/* <Admin rooms={props.rooms} /> */}
    </div>
  );
}

export default HostCode;
