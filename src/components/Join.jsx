import React from "react";
import "./Css/buttons.css";
import { Link } from "react-router-dom";
import Client from "./Client";
function Join() {
  return (
    <div>
      <a href="/joincode">
        <button role="button">Join Session</button>
      </a>
    </div>
  );
}

export default Join;
