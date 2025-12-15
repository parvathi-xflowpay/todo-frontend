import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          My Todos
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          No todos yet. Start by creating a new todo!
        </p>
        <div className="mt-6">
          <Link
            href="/todos/create"
            className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create New Todo
          </Link>
        </div>
      </div>
    </div>
  );
}
