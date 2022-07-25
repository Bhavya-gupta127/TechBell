import React, { useState } from "react";

import "./Css/hostinfo.css";
import HostCode from "./HostCode";
// import firebase from "../firebase";
// import { getDatabase, ref, set } from "firebase/database";
// import firebase from "firebase/app";
// import "firebase/database";
// import firebaseConfig from "./firebaseConfig";

//firebase
import { getDatabase, ref, set, onValue } from "firebase/database";
import database from "./firebaseConfig";

function HostInfo() {
  const [isFilled, setIsFilled] = useState(false);
  const [code, setCode] = useState(0);
  const [college, setCollege] = useState("");
  const [company, setCompany] = useState("");
  const [rooms, setRooms] = useState(0);

  function updatedatabase() {
    const db = database;
    const temp = Math.floor(Math.random() * 1000000 + 1);
    setCode(temp);
    set(ref(db, `code/${temp}`), {
      temp,
      college,
      company,
      rooms,
    });
  }
  function handleSubmit() {
    // const random = ;
    console.log(rooms);
    // setCode());
    setIsFilled(true);
    // have to update not set
    updatedatabase();

    // const hostref = firebase.database().ref("Host");
    // const db = getDatabase();
    // set(ref(db, "/code"), {
    //   // college: college,
    //   // company: company,
    //   rooms: rooms,
    //   number: code,
    // });
    // const host = {
    // const host = {
    //   college: college,
    //   company: company,
    //   rooms: rooms,
    // };
    // hostref.push(host);
    //this will send all the info to firebase
    //with the link path
  }
  function addCollege(event) {
    let newval = event.target.value;
    setCollege(newval);
  }
  function addCompany(event) {
    let newval = event.target.value;
    setCompany(newval);
  }
  function addRooms(event) {
    let newval = event.target.value;
    setRooms(newval);
  }
  return (
    <div className="left-container">
      {!isFilled && (
        <div className="host_container">
          <h1>Create New Session :</h1>

          <form action="/action_page.php">
            <div className="host_item">
              <label htmlFor="organisation_name">
                Inerviewee's organisation
              </label>
              <input
                name="organisation_name"
                onChange={addCollege}
                type="text"
                placeholder="Organisation Name "
                size="40"
              />
            </div>
            <div className="host_item">
              <label htmlFor="organisation_name2">
                Inerviewer's organisation
              </label>
              <input
                name="organisation_name2"
                onChange={addCompany}
                type="text"
                placeholder="organisation name"
                size="40"
              />
            </div>
            <div className="host_item">
              <label htmlFor="irnumber">No. of interview rooms</label>
              <input
                name="irnumber"
                onChange={addRooms}
                type="text"
                placeholder="1"
                size="40"
              />
            </div>
            {/* <div className="host_item">
              <label htmlFor="pin">Create new a pin</label>
              <input
                required
                name="pin"
                id="pin"
                onChange={addRooms}
                type="text"
                size="50"
              />
            </div> */}

            {/* <input type="submit" onSubmit={handleSubmit} /> */}

            <div className="host_submit">
              <button type="submit" onClick={handleSubmit}>
                submit
              </button>
            </div>
          </form>

          {/* <div className="host_item">
            College Name : <input />
          </div>
          <div className="host_item">
            Total Rooms : <input />
          </div>
          <div className="host_item">
            Company Name :{" "}
            <input
              onChange={addCompany}
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div className="host_submit">
          </div> */}
        </div>
      )}
      {isFilled && (
        <HostCode
          code={code}
          collegeName={college}
          rooms={rooms}
          company={company}
        />
      )}
    </div>
  );
}

export default HostInfo;
