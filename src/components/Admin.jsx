import React, { useState, useEffect, setItems } from "react";
import {
  getDatabase,
  ref,
  onValue,
  remove,
  get,
  child,
} from "firebase/database";
import database from "./firebaseConfig";
import SessionEnd from "./SessionEnd";
import "./Css/Admin.css";
import Details from "./Details";
function Admin() {
  //we will get all the data from fire base
  const db = database;
  const [data, setData] = useState("");
  const [ended, setEnded] = useState(false);

  const path = window.location.pathname;
  const code = path.slice(1, path.length - 6);
  const roomRef = ref(db, "room/" + code);
  const [irf, setIrf] = useState([]);

  useEffect(() => {
    onValue(roomRef, (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  if (data && data.A) irf[0] = true;
  else irf[0] = false;
  if (data && data.B) irf[1] = true;
  else irf[1] = false;
  if (data && data.C) irf[2] = true;
  else irf[2] = false;
  if (data && data.D) irf[3] = true;
  else irf[3] = false;
  if (data && data.E) irf[4] = true;
  else irf[4] = false;
  if (data && data.F) irf[5] = true;
  else irf[5] = false;
  if (data && data.G) irf[6] = true;
  else irf[6] = false;
  if (data && data.H) irf[7] = true;
  else irf[7] = false;
  if (data && data.I) irf[8] = true;
  else irf[8] = false;
  if (data && data.J) irf[9] = true;
  else irf[9] = false;
  if (data && data.K) irf[10] = true;
  else irf[10] = false;
  if (data && data.L) irf[11] = true;
  else irf[11] = false;
  if (data && data.M) irf[12] = true;
  else irf[12] = false;
  if (data && data.N) irf[13] = true;
  else irf[13] = false;
  if (data && data.O) irf[14] = true;
  else irf[14] = false;
  if (data && data.P) irf[15] = true;
  else irf[15] = false;
  if (data && data.Q) irf[16] = true;
  else irf[16] = false;
  if (data && data.R) irf[17] = true;
  else irf[17] = false;
  if (data && data.S) irf[18] = true;
  else irf[18] = false;
  if (data && data.T) irf[19] = true;
  else irf[19] = false;
  if (data && data.U) irf[20] = true;
  else irf[20] = false;
  if (data && data.V) irf[21] = true;
  else irf[21] = false;
  if (data && data.W) irf[22] = true;
  else irf[22] = false;
  if (data && data.X) irf[23] = true;
  else irf[23] = false;
  if (data && data.Y) irf[24] = true;
  else irf[24] = false;
  if (data && data.Z) irf[25] = true;
  else irf[25] = false;

  function handleclick(index) {
    let temp =
      "room/" + code + "/" + String.fromCharCode(parseInt(index + 1) + 64);
    remove(ref(db, temp));
    onValue(roomRef, (snapshot) => {
      setData(snapshot.val());
    });
  }
  function handleEnd(e) {
    if (window.confirm("End Session?")) {
      setEnded(true);
      // console.log("hehe");
    } else {
      // console.log("nothing happens");
    }
  }
  function RemoveDataBase() {
    setTimeout(() => {
      remove(ref(db, "code/" + code));
    }, 1000);
  }
  return (
    <div className="admin_container">
      {!ended && (
        // <div className="details_container">
        //   <div className="college_name">{college.toUpperCase()}</div>
        //   <div className="company_name">{company.toUpperCase()}</div>
        // </div>
        <Details code={code} />
      )}
      <div className="active_container">
        <div className="active">
          {!ended &&
            irf.map((state, index) => {
              return (
                state && (
                  <>
                    <div
                      key={index}
                      onClick={() => handleclick(index)}
                      className="admin_item"
                      style={{ color: state ? "green" : "black" }}
                    >
                      <p className="admin_text">IR {index + 1}</p>
                    </div>
                  </>
                )
              );
            })}
        </div>
      </div>

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
  );
}

export default Admin;
