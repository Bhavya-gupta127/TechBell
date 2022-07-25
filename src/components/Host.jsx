import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./Css/buttons.css";
import HostInfo from "./HostInfo";
import "./Css/mybtn.css";
function Host() {
  const [first, setfirst] = useState(0);
  //   const [isclicked, setisClicked] = useState(false);
  //   function Clicked() {
  //     setisClicked(true);
  //   }
  // let history = useHistory();

  // function handleClick() {
  //   // history.push("/hostinfo");
  //   return <a href={"hostinfo"}></a>;
  // }
  return (
    <div>
      {/* <Link to={"/hostinfo"}> */}
      <a href={"hostinfo"}>
        <button role="button">Create Session</button>
      </a>
      {/* <a href={} className="a">
        Host
      </a> */}
    </div>
  );
}

export default Host;
