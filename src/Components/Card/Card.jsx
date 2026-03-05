import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="flex flex-col w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <NavLink to={`/products/${product.id}`}>
        <NavLink
          to={`/products/${product.id}`}
          className="flex items-center justify-center h-64 p-8"
        >
          <img
            className="object-contain max-h-full transition-transform hover:scale-105"
            src={product.image}
            alt={product.title}
          />
        </NavLink>

        <div className="px-5 pb-5 mt-auto">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {product.title}
          </h5>

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mt-2 inline-block">
            {product.category}
          </span>

          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <span className="text-yellow-300">★</span>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {product.rating?.rate}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart
            </button>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
