import React, { useState } from "react";
import "./buttons.css";
import HostInfo from "./HostInfo";

import "./App.css";

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
    <div>
      <Host />
      <Join />
    </div>
  );
};

export default Home;
