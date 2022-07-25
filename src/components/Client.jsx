import { useState } from "react";
import React from "react";
import Ir from "./Ir";
function Client() {
  const [ir, setIr] = useState(0);

  function handleChange(event) {
    let newval = event.target.value;
    setIr(newval);
  }
  function handleSubmit() {
    return <Ir ir={ir} name="bhavya" />;
  }
  // console.log(ir);
  
  return (
    <div className="left-container">
      <div className="client_container">
        <div className="clinet_input">
          <h1>Enter your Interview Room Number :</h1>
          <input
            onChange={handleChange}
            type="Number"
            className="irnumber"
            placeholder="1"
            value={ir}
          />
        </div>
      </div>
      <a
        href={String.fromCharCode(parseInt(ir) + 64)}
        onClick={handleSubmit}
        // className="client_submit"
      >
        <button>Submit</button>
      </a>
    </div>
  );
}

export default Client;
