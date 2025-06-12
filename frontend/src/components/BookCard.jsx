// src/components/BookCard.jsx
function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-700 mb-4">Author: {book.author}</p>
      <div className="flex justify-between">
        <button
          className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500"
          onClick={() => onEdit(book)}
        >
          Update
        </button>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={() => onDelete(book._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
