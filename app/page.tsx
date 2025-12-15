import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <main className="flex w-full flex-col items-center justify-between py-32 px-16">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to the ToDo App!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Get started by navigating to the Todos page.
        </p>
      </main>
    </div>
  );
}
