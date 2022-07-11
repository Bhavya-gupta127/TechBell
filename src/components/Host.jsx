import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./buttons.css";
import HostInfo from "./HostInfo";

function Host() {
  const [first, setfirst] = useState(0);
  //   const [isclicked, setisClicked] = useState(false);
  //   function Clicked() {
  //     setisClicked(true);
  //   }
  let history = useHistory();

  function handleClick() {
    history.push("/hostinfo");
  }
  return (
    <div>
      {/* {!isclicked && ( */}
      {/* {first ? (
        <Redirect to="/dashboard" replace={true} />
      ) : (
        <button type="button" className="a" onClick={handleClick}>
          Host
        </button>
      )} */}

      {/* <Link to={"/hostinfo"} className="a">
        Host
      </Link> */}

      <a href={"/hostinfo"} className="a">
        Host
      </a>

      {/* )} */}
      {/* {isclicked && <HostInfo />} */}
    </div>
  );
}

export default Host;
