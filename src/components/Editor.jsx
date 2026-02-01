export default function Editor({ value, onChange }) {
  return (
    <textarea
      className="w-full p-4 border border-gray-300 rounded resize-none focus:ring-2 h-96 focus:outline-none focus:ring-blue-500"
      value={value}
      onChange={onChange}
      placeholder="Вставте текст сюди..."
    />
  );
}
