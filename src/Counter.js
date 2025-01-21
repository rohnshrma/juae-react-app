import React, { useState } from "react";

const Counter = () => {
  console.log("counter running");

  var [count, setCount] = useState(0);

  const incrementHandler = function () {
    setCount((count += 1));
  };

  return (
    <div className="counter">
      <h2>Count : {count} </h2>
      <button className="btn btn-dark" onClick={incrementHandler}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
