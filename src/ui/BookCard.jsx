import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100   shadow-sm"
    >
      <figure>
        <img className="h-32" src={book.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          {book.tags.map((tag, index) => (
            <div
              key={index}
              className="badge text-green-500 bg-green-100 font-bold text-lg"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-xl font-bold">{book.bookName}</h2>
        <p className="font-semibold">{book.author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
