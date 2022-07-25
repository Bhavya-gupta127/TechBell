import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Css/Header.css";

function Header() {
  const [time, setTime] = useState("");
  const [daydate, setdaydate] = useState("");

  useEffect(() => {
    var today = new Date();
    var day = today.getDay();
    if (day == 1) day = "• Mon, ";
    if (day == 2) day = "• Tue, ";
    if (day == 3) day = "• Wed, ";
    if (day == 4) day = "• Thu, ";
    if (day == 5) day = "• Fri, ";
    if (day == 6) day = "• Sat, ";
    if (day == 7) day = "• Sun, ";
    var month = today.getMonth() + 1;
    if (month == 1) month = "Jan ";
    if (month == 2) month = "Feb ";
    if (month == 3) month = "March ";
    if (month == 4) month = "April ";
    if (month == 5) month = "May ";
    if (month == 6) month = "June ";
    if (month == 7) month = "July ";
    if (month == 8) month = "Aug ";
    if (month == 9) month = "Sep ";
    if (month == 10) month = "Oct ";
    if (month == 11) month = "Nov ";
    if (month == 12) month = "Dec ";
    var date = today.getDate();
    setdaydate(day + month + date);
  }, [1]);

  useEffect(() => {
    setInterval(() => {
      var today = new Date();
      var hr = today.getHours();
      var period = "AM";
      if (hr > 12) {
        hr -= 12;
        period = "PM";
      }
      var min = today.getMinutes();
      if (min < 10) min = "0" + min;

      setTime(hr + ":" + min + " " + period);
    }, 1000);
  });

  return (
    <div className="nav">
      <a className="left" href="/">
        <div className="nav-img ">
          {/* <img src="/favicon.ico" alt="logo" height={30} /> */}
          {/* <img src="/Tech_Bell_logo_3.png" alt="logo" /> */}
          <img src="/9.png" alt="logo" />
        </div>
        <div className="nav-item title">Tech BELL</div>
      </a>
      <div className="right">
        <div className="nav-item time">
          {time} {daydate}
        </div>
        <div className="nav-item">About us</div>
        <div className="nav-item">Contact us</div>
      </div>
    </div>
  );
}

export default Header;
