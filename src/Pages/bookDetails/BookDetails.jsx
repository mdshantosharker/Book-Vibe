import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();
  //   console.log(bookId,'bookId');
  const books = useLoaderData();
  //   console.log(books,'books');
  const expectedBook = books.find((book) => book.bookId == bookId);
  console.log(expectedBook);
  return (
    <>
      <div className="max-w-6xl mx-auto my-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-base-100 shadow-xl rounded-2xl p-6">
          <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6">
            <img
              src={expectedBook.image}
              alt={expectedBook.bookName}
              className="h-72 object-contain rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{expectedBook.bookName}</h1>

            <p className="text-gray-500">
              By <span className="font-semibold">{expectedBook.author}</span>
            </p>

            <div className="flex flex-wrap gap-2">
              {expectedBook.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed">
              {expectedBook.review}
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>📄 Pages: {expectedBook.totalPages}</span>
              <span>📅 Year: {expectedBook.yearOfPublishing}</span>
              <span>🏢 Publisher: {expectedBook.publisher}</span>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="btn btn-outline btn-primary">Read Now</button>
              <button className="btn bg-pink-500 text-white hover:bg-pink-600">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
