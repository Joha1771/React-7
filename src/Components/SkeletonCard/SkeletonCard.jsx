const SkeletonCard = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      <div className="flex items-center justify-center h-64 bg-gray-300 rounded-t-lg dark:bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.897-1.447L7 8l2.433 3.65L11.8 9.1a1 1 0 0 1 1.57.1l3.5 5.5a1 1 0 0 1-.494 1.231Z" />
        </svg>
      </div>

      <div className="px-5 pb-5 mt-4">
        <div className="w-48 h-5 mb-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="w-24 h-3 mb-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>

        <div className="flex items-center justify-between pt-4">
          <div className="w-20 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-28"></div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonCard;
