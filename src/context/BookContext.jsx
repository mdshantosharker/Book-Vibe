import React, { Children, createContext, useState } from "react";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState([]);
  const handleMarkAsRead = (currentBook) => {
    const isExitedBook = selectedBook.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExitedBook) {
      alert("book is already exist");
    } else {
      setSelectedBook([...selectedBook, currentBook]);
      alert(`${currentBook.bookName} is added to list`);
    }
    // console.log(isExitedBook);
    console.log(currentBook);
    console.log(selectedBook);
  };

  const data = {
    selectedBook,
    setSelectedBook,
    handleMarkAsRead,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
