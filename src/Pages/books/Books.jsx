import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const Books = () => {
  const { selectedBook, wishList } = useContext(BookContext);
  console.log("selectedBook", { selectedBook });
  console.log("wishList", { wishList });
  return (
    <div className="">
      read List : {selectedBook.length}
      <br />
      wish List : {wishList.length}
    </div>
  );
};

export default Books;
