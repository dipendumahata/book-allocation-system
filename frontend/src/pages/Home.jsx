// pages/Home.jsx
import { useEffect, useState } from "react";
import API from "../services/api";
import BookCard from "../components/BookCard";
import EditModal from "../components/EditModal";
import Header from "../components/Header";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

function Home() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "" });
  const [editBook, setEditBook] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", author: "" });
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await API.get("/books");
      setBooks(res.data);
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) setUsername(savedUsername);
    } catch (err) {
      toast.error("❌ Failed to load books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleEditChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/books", form);
      setForm({ title: "", author: "" });
      toast.success("✅ Book uploaded successfully!");
      fetchBooks();
    } catch (err) {
      toast.error("❌ Upload failed. Are you logged in?");
    }
  };

  const deleteBook = async (id) => {
    try {
      await API.delete(`/books/${id}`);
      toast.success("🗑️ Book deleted");
      fetchBooks();
    } catch (err) {
      toast.error("❌ Not authorized to delete this book");
    }
  };

  const openEditModal = (book) => {
    setEditBook(book);
    setEditForm({ title: book.title, author: book.author });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/books/${editBook._id}`, editForm);
      toast.success("✏️ Book updated");
      setEditBook(null);
      fetchBooks();
    } catch (err) {
      toast.error("❌ Update failed");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header username={username} />

      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Upload a New Book</h2>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={form.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={form.author}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Upload
        </button>
      </form>

      {/* Book List or Loader */}
      {loading ? (
        <div className="flex justify-center mt-12">
          <ClipLoader color="#3b82f6" size={50} />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book._id} book={book} onEdit={openEditModal} onDelete={deleteBook} />
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editBook && (
        <EditModal
          book={editBook}
          form={editForm}
          onChange={handleEditChange}
          onCancel={() => setEditBook(null)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
}

export default Home;
