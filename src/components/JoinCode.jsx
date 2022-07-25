import { useState } from "react";
import React from "react";
//this will be valid for 1 day
function JoinCode() {
  const [code, setCode] = useState(0);

  function handleChange(event) {
    let newval = event.target.value;
    setCode(newval);
  }
  function handleSubmit() {}

  return (
    <div className="left-container">
      <div className="client_container">
        <div className="clinet_input">
          <h1>Enter your Join Code :</h1>
          <input
            onChange={handleChange}
            type="Number"
            className="codenumber"
            placeholder="0"
            value={code}
          />
        </div>
      </div>
      <a
        href={"/" + code + "/client"}
        // onClick={handleSubmit}
        // className="client_submit"
      >
        <button>Submit</button>
      </a>
    </div>
  );
}

export default JoinCode;
