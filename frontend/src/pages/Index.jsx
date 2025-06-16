// pages/Index.jsx
import { useNavigate } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/outline"; // You need heroicons installed

function Index() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="text-center bg-white p-10 rounded-xl shadow-md w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <BookOpenIcon className="w-20 h-20 text-indigo-600 animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-indigo-700">📚 Welcome to BookShelf</h1>
        <p className="text-gray-700 text-lg mb-6">Manage your favorite books with ease.</p>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default Index;
