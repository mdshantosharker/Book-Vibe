import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const Books = () => {
  const { selectedBook } = useContext(BookContext);
  console.log({ selectedBook });
  return (
    <div>
      <h1>this is books</h1>
    </div>
  );
};

export default Books;
