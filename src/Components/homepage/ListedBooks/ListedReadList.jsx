import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../../context/BookContext";
import BookCard from "../../../ui/BookCard";

const ListedReadList = ({ sortingType }) => {
  const { selectedBook } = useContext(BookContext);

  const [filteredReadList, setFilteredReadList] = useState(selectedBook);
  useEffect(() => {
    if (sortingType) {
      if (sortingType == "pages") {
        const sortedData = [...selectedBook].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData);
        setFilteredReadList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...selectedBook].sort(
          (a, b) => a.rating - b.rating,
        );
        console.log(sortedData);
        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, selectedBook]);
  if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h1 className="font-bold text-3xl">No ReadList here</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {filteredReadList.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
