import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <svg
          className="mx-auto h-16 w-16 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          404 - Not Found
        </h1>

        <p className="mt-2 text-lg text-gray-600">
          Sorry, the todo you are looking for doesn't exist in your todo list.
        </p>
        <div className="mt-6">
          <Link
            href="/todos"
            className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go back to todos
          </Link>
        </div>
      </div>
    </div>
  );
}
