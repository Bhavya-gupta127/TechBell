import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import database from "./firebaseConfig";
import SessionEnd from "./SessionEnd";
import "./Css/ir.css";
import Details from "./Details";
import { contains } from "jquery";
function Ir(props) {
  const [isgreen, setIsGreen] = useState(false);
  // console.log();
  const [ended, setEnded] = useState(false);
  const db = database;
  const path = window.location.pathname;
  const code = path.slice(1, path.length - 2);
  function handleClick() {
    // setIsGreen(true);

    set(ref(db, `room${path}`), {
      path: true,
    });
  }
  const roomRef = ref(db, `room/${path}`);
  useEffect(() => {
    onValue(roomRef, (snapshot) => {
      setIsGreen(snapshot.val());
      // console.log(snapshot.val());
    });
  }, []);

  function handleEnd(e) {
    if (window.confirm("End Session?")) {
      setEnded(true);
      console.log("hehe");
      // let temp2 = "code/" + code;
      // remove(ref(db, temp2));
    } else {
      console.log("nothing happens");
    }
  }
  function RemoveDataBase() {
    setTimeout(() => {
      remove(ref(db, `room${path}`));
    }, 1000);
  }
  return (
    <div>
      <Details code={code} />
      {/* {console.log(code)} */}
      <div
        onClick={handleClick}
        className="ir_container"
        style={{ backgroundColor: isgreen ? "green" : null }}
      >
        {!ended && <span class="inner">Next Candidte?</span>}
        {console.log(roomRef)}
        {!ended && (
          <button className="end_btn" onClick={handleEnd}>
            End Session
          </button>
        )}
        {ended && (
          <div>
            <SessionEnd />
            {RemoveDataBase}
          </div>
        )}
      </div>
    </div>
  );
}
export default Ir;
