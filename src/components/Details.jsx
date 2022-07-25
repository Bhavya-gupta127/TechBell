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
import "./Css/detail.css";
function Details(props) {
  const [college, setCollege] = useState("");
  const [company, setCompany] = useState("");
  const db = database;
  const codeRef = ref(db, "code/" + props.code);
  useEffect(() => {
    onValue(codeRef, (snapshot) => {
      // console.log(snapshot.val().college);
      setCollege(snapshot.val().college);
      setCompany(snapshot.val().company);
      //   setRooms(snapshot.val().rooms);
      // console.log(college);
    });
  }, []);
  return (
    <>
      <div className="details_container">
        <div className="college_name">{college.toUpperCase()}</div>
        <div className="company_name">{company.toUpperCase()}</div>
      </div>
    </>
  );
}

export default Details;
