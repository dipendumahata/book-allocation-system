// src/components/Header.jsx
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// components/Header.jsx
function Header({ username }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    document.cookie = "token=; Max-Age=0";
    toast.info("👋 Logged out");
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md rounded-lg px-6 py-4 flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold tracking-wide">📚 BookShelf</h1>
      <div className="flex items-center gap-4">
        <span className="font-medium">Hello, {username || "User"} 👋</span>
        <button
          onClick={handleLogout}
          className="bg-white text-indigo-600 font-semibold px-4 py-1 rounded hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
