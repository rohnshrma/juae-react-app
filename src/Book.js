import React from "react";
import { FaBullseye } from "react-icons/fa";

const Book = ({ title, author, address }) => {
  return (
    <div className="Book">
      <img src={address} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default Book;
