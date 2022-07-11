import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import database from "./firebaseConfig";
function Ir(props) {
  const [isgreen, setIsGreen] = useState(false);
  // console.log();
  const db = database;
  const path = window.location.pathname;
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
  return (
    <div
      onClick={handleClick}
      className="ir_container"
      style={{ backgroundColor: isgreen ? "green" : null }}
    >
      <h1>Next</h1>
    </div>
  );
}
export default Ir;
