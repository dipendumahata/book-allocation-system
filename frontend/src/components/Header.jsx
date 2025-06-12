// src/components/Header.jsx
import { useNavigate } from "react-router-dom";

function Header({ username }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage and token cookie
    localStorage.removeItem("username");
    document.cookie = "token=; Max-Age=0; path=/;"; // clear cookie

    // Redirect to login
    navigate("/login");
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold">📚 Book App</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-700">Hello, {username || "User"} 👋</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
