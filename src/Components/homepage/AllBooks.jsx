import React, { use } from "react";
import BookCard from "../../ui/BookCard";

const fetchBooks = async () => {
  const res = await fetch("booksData.json");
  return res.json();
};

const fetchPromise = fetchBooks();

const AllBooks = () => {
  const books = use(fetchPromise);
//   console.log(books);
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Books</h1>
      <div className="grid grid-cols-3 gap-10 container mx-auto">
        {books.map((book) => (
          <BookCard book={book} key={book.bookId}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
