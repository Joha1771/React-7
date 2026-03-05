import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  setPage,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, currentPage + 2);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <nav
      aria-label="Page navigation"
      className="bg-[#1e2939] py-5 flex justify-center"
    >
      <ul className="flex -space-x-px text-sm">
        <li>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-10 h-10 border border-gray-700 text-gray-400 bg-[#1e2939] rounded-s-lg hover:bg-gray-800 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
        </li>
        {getPageNumbers().map((pageNum) => (
          <li key={pageNum}>
            <button
              onClick={() => setPage(pageNum)}
              className={`flex items-center justify-center w-10 h-10 border transition-colors ${
                pageNum === currentPage
                  ? "z-10 text-blue-400 border-blue-500 bg-blue-900/20 font-bold"
                  : "text-gray-400 border-gray-700 bg-[#1e2939] hover:bg-gray-800 hover:text-white"
              }`}
            >
              {pageNum}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-10 h-10 border border-gray-700 text-gray-400 bg-[#1e2939] rounded-e-lg hover:bg-gray-800 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
