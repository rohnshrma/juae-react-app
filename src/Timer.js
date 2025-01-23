// import React, { useState } from "react";

// const Timer = function () {
//   const [timer, setTimer] = useState("Get Time...");

//   const clickHandler = () => {
//     setTimer(new Date().toLocaleTimeString());
//   };

//   return (
//     <div className="timer">
//       <h2>{timer}</h2>
//       <button onClick={clickHandler}>Set Time</button>
//     </div>
//   );
// };

// export default Timer;

import React, { useState } from "react";

const Timer = function () {
  const [timer, setTimer] = useState("Get Time...");

  const clickHandler = () => {
    setTimer(new Date().toLocaleTimeString());
  };

  setInterval(clickHandler, 1000);

  return (
    <div className="timer">
      <h2>{timer}</h2>
      {/* <button onClick={clickHandler}>Set Time</button> */}
    </div>
  );
};

export default Timer;
