import React, { useContext } from "react";
import { BookContext } from "../../../context/BookContext";
import BookCard from "../../../ui/BookCard";

const ListedWishList = () => {
  const { wishList } = useContext(BookContext);

  if (wishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h1 className="font-bold text-3xl">No WishList here</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {wishList.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
