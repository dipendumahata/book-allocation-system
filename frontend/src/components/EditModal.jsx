// src/components/EditModal.jsx
function EditModal({ book, form, onChange, onCancel, onSubmit }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Book</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={onChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={onChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
