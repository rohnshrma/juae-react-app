import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");

  //    on change handler
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalName(name);
  };

  return (
    <div className="create-area">
      <h2>My Name Is {finalName} </h2>
      <p>Email : </p>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            onChange={handleNameChange}
            type="text"
            className="form-control"
            placeholder="Enter your name..."
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email..."
          />
        </div>
        <button className="btn btn-success btn-block mt-3">Submit</button>
      </form>
    </div>
  );
};

export default Form;
