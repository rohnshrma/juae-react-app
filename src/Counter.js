// Import React and useReducer hook from React
// React aur useReducer hook ko import kar rahe hain
import React, { useReducer } from "react";

// Define the initial state of the counter
// Counter ka initial state define kar rahe hain
const initialState = {
  count: 0, // Counter ka starting value 0 rakha gaya hai
};

// Reducer function to handle state updates based on actions
// Reducer function jo state ko update karega actions ke basis par
const reducerFunction = (state, action) => {
  console.log(state, action); // Debugging ke liye current state aur action ko console par print kar raha hai

  // Check if action type is "INCREMENT"
  // Agar action ka type "INCREMENT" hai to count badhayenge
  if (action.type === "INCREMENT") {
    return {
      count: state.count + action.payload, // Payload jitna value hai usko count me add karenge
    };
  }

  // Check if action type is "DECREMENT"
  // Agar action ka type "DECREMENT" hai to count kam karenge
  if (action.type === "DECREMENT") {
    return {
      count: state.count - action.payload, // Payload jitna value hai usko count se subtract karenge
    };
  }

  return initialState; // Agar koi valid action nahi mila to initial state return karenge
};

// Define the Counter component
// Counter component define kar rahe hain
const Counter = () => {
  console.log("counter running"); // Debugging ke liye console par message print kar rahe hain

  // useReducer hook ka use karke state aur dispatch function initialize kar rahe hain
  // useReducer(reducerFunction, initialState) reducer function aur initial state ko use karta hai
  var [countState, dispatch] = useReducer(reducerFunction, initialState);

  // Function to handle increment action
  // Increment button dabane par ye function call hoga
  const incrementHandler = function () {
    dispatch({ type: "INCREMENT", payload: 2 }); // Dispatch function ka use karke action bhej rahe hain
  };

  // Function to handle decrement action
  // Decrement button dabane par ye function call hoga
  const decrementHandler = function () {
    dispatch({ type: "DECREMENT", payload: 2 }); // Dispatch function ka use karke action bhej rahe hain
  };

  return (
    <div className="counter">
      {/* Counter ka current value show kar rahe hain */}
      <h2>Count : {countState.count} </h2>

      {/* Increment button jo incrementHandler function ko call karega */}
      <button className="btn btn-dark" onClick={incrementHandler}>
        Increment
      </button>

      {/* Decrement button jo decrementHandler function ko call karega */}
      <button className="btn btn-dark" onClick={decrementHandler}>
        Decrement
      </button>
    </div>
  );
};

// Counter component ko export kar rahe hain taaki doosre files me use kiya ja sake
export default Counter;
