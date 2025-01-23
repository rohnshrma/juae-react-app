import React, { useState } from "react";
// English: Importing React and the `useState` hook from the React library.
// Hinglish: React aur `useState` hook ko React library se import kar rahe hain.

const Form = () => {
  // English: Creating a functional component named `Form`.
  // Hinglish: Ek functional component `Form` bana rahe hain.

  const [name, setName] = useState("");
  // English: Declaring a state variable `name` and a function `setName` to update it. Initial value is an empty string.
  // Hinglish: Ek state variable `name` aur usko update karne ke liye function `setName` declare kar rahe hain. Initial value khali string hai.

  const [finalName, setFinalName] = useState("");
  // English: Declaring another state variable `finalName` and its updater function `setFinalName`. Initial value is an empty string.
  // Hinglish: Ek aur state variable `finalName` aur uska updater function `setFinalName` declare kar rahe hain. Initial value khali string hai.

  // on change handler
  const handleNameChange = (e) => {
    setName(e.target.value);
    // English: Updates `name` state with the value entered in the input field.
    // Hinglish: Input field me jo value type ki hai, usse `name` state update karta hai.
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // English: Prevents the default form submission behavior (page reload).
    // Hinglish: Form ke default submit behavior (page reload) ko prevent karta hai.

    setFinalName(name);
    // English: Updates `finalName` state with the current value of `name`.
    // Hinglish: Abhi ke `name` value se `finalName` state ko update karta hai.
  };

  return (
    <div className="create-area">
      {/* English: Wrapper div with class name `create-area`. */}
      {/* Hinglish: Ek wrapper div jiska class name `create-area` hai. */}

      <h2>My Name Is {finalName} </h2>
      {/* English: Displays "My Name Is" followed by the value of `finalName`. */}
      {/* Hinglish: "My Name Is" ke baad `finalName` ka value dikhata hai. */}

      <form onSubmit={submitHandler}>
        {/* English: Form element with an `onSubmit` event that triggers `submitHandler`. */}
        {/* Hinglish: Form element jisme `onSubmit` event `submitHandler` ko trigger karta hai. */}

        <div className="form-group">
          {/* English: Div element with class `form-group` for styling purposes. */}
          {/* Hinglish: Ek div element jiska class `form-group` styling ke liye hai. */}

          <input
            onChange={handleNameChange}
            type="text"
            className="form-control"
            placeholder="Enter your name..."
          />
          {/* English: Input field for entering name. Calls `handleNameChange` whenever text changes. */}
          {/* Hinglish: Ek input field jo name enter karne ke liye hai. Text change hone par `handleNameChange` ko call karta hai. */}
        </div>

        <button className="btn btn-success btn-block mt-3">Submit</button>
        {/* English: Submit button with styling classes `btn`, `btn-success`, `btn-block`, and `mt-3`. */}
        {/* Hinglish: Ek submit button jisme styling classes `btn`, `btn-success`, `btn-block`, aur `mt-3` lagayi gayi hai. */}
      </form>
    </div>
  );
};

export default Form;
// English: Exporting the `Form` component so it can be used in other files.
// Hinglish: `Form` component ko export kar rahe hain, taaki ise dusre files me use kiya ja sake.
