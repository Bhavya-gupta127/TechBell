import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import HostInfo from "./HostInfo";
import Admin from "./Admin";
import Client from "./Client";
import JoinCode from "./JoinCode";
import Ir from "./Ir";
import Connector from "./Connector";

//firebase
import { ref, onValue } from "firebase/database";
import database from "./firebaseConfig";
import { async } from "@firebase/util";

function App() {
  const [codeobj, setCodeobj] = useState([]);
  const [code, setCode] = useState([]);

  const db = database;

  // console.log("code 1:", codeobj);
  const codeRef = ref(db, "code/");
  useEffect(() => {
    // async function myasync() {
    onValue(codeRef, (snapshot) => {
      // setCodeobj(snapshot.val());
      setCode(Object.keys(snapshot.val()));
      // setCode(Object.values(codeobj));
    });
    // }
    // myasync();
  }, []);
  // useEffect(() => {
  //   setCode(Object.values(codeobj));
  // }, [codeobj]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await
  //     return request;
  //   }
  //   fetchData();
  // }, [codeobj]);

  // console.log("code 2:", codeobj);
  // function f2() {
  //
  // }
  // async function f1() {
  //   var x = await f2;
  //   console.log(x); // 10
  // }

  // console.log(codeobj);
  // console.log(code);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {/* <Link to="/hostinfo">host</Link>
            <Link to="/123456/admin">admin</Link> */}
            <Home />
            {/* <Connector /> */}
          </Route>

          {code.map((c) => {
            return (
              <Route key={c} exact path={`/${c}/admin`}>
                <Admin />
              </Route>
            );
          })}

          {/* <Route exact path={`/${123456}/admin`}>
            <Admin />
          </Route>
          <Route exact path={`/${111111}/admin`}>
            <Admin />
          </Route> */}

          {code.map((c) => {
            return (
              <Route key={c} exact path={`/${c}/client`}>
                <Client />
              </Route>
            );
          })}
          {/* <Route exact path={`/${123456}/client`}>
            <Client />
          </Route>
          <Route exact path={`/${111111}/client`}>
            <Client />
          </Route> */}

          {code.map((c) => {
            return (
              <Route key={c} path={`/${c}/*`}>
                <Ir />
              </Route>
            );
          })}
          {/* <Route path={`/${123456}/*`}>
            <Ir />
          </Route>
          <Route path={`/${111111}/*`}>
            <Ir />
          </Route> */}
          <Route exact path="/hostinfo">
            <HostInfo />
          </Route>
          <Route exact path="/joincode">
            <JoinCode />
          </Route>
        </Switch>
      </Router>
      {/* {console.log(codeobj)} */}
    </div>
  );
}

export default App;
