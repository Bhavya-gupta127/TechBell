import React, { useState } from "react";
import "./Css/buttons.css";
import HostInfo from "./HostInfo";

import "./Css/App.css";
import "./Css/home.css";
import Host from "./Host";
import Join from "./Join";
import { Link } from "react-router-dom";

const Home = () => {
  const [ishost, setisHost] = useState(false);
  const [isjoin, setisJoin] = useState(false);
  function hostClicked() {
    setisHost(true);
  }
  function joinClicked() {
    setisJoin(true);
  }
  return (
    <div className="left-container">
      <h1 className="home_title"> heading</h1>
      <p className="home_text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cumque,
        laboriosam necessitatibus, molestiae iure architecto quaerat dolores,
        sequi eius
      </p>
      <div className="mybtns">
        <div className="home_btn">
          <Host />
        </div>
        <div className="home_btn">
          <Join />
        </div>
      </div>
    </div>
  );
};

export default Home;
