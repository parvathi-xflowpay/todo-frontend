
export default function Loading () {
  return (
    <div className="p-10 min-h-full">
      <div className="mb-5 w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
      <div className="p-5 flex flex-col bg-gray-50 rounded text-gray-700 shadow-md">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded-2xl w-24 mb-4"></div>
          <div className="mt-4 pb-2 border-b border-gray-200">
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
          </div>
          <div className="pt-2 flex text-gray-500">
            <div className="h-4 bg-gray-200 rounded w-40 mr-4"></div>
            <div className="h-4 bg-gray-200 rounded w-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

