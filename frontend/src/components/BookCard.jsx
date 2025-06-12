// components/BookCard.jsx
function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">{book.title}</h2>
      <p className="text-gray-600 mb-4">Author: <span className="text-purple-700">{book.author}</span></p>
      <div className="flex justify-between">
        <button
          className="bg-yellow-400 text-white px-4 py-1 rounded-md hover:bg-yellow-500 transition"
          onClick={() => onEdit(book)}
        >
          ✏️ Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
          onClick={() => onDelete(book._id)}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
