import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
