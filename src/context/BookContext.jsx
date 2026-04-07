import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExitedBook = selectedBook.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExitedBook) {
      toast.error("book is already exist");
    } else {
      setSelectedBook([...selectedBook, currentBook]);
      toast.success(`${currentBook.bookName} is added to read list`);
    }
    // console.log(isExitedBook);
    // console.log(currentBook);
    // console.log(selectedBook);
  };

  const handleWishList = (currentBook) => {
    const isExistInReadList = selectedBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error("This book is already in read list");
      return;
    }

    const isExitedBook = wishList.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExitedBook) {
      toast.error("book is already exist");
    } else {
      setWishList([...selectedBook, currentBook]);
      toast.success(`${currentBook.bookName} is added to wish list`);
    }
    // console.log(isExitedBook);
    // console.log(currentBook);
    // console.log(selectedBook);
  };

  const data = {
    selectedBook,
    setSelectedBook,
    handleMarkAsRead,
    handleWishList,
    wishList,
    setWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
