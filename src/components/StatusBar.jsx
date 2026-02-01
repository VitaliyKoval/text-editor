export default function StatusBar({
  totalLines,
  emptyLines,
  lastOperationTime,
}) {
  return (
    <div className="grid grid-cols-3 gap-2 p-2 text-sm text-gray-600 border-t border-gray-200 bg-gray-50">
      <span>Рядків: {totalLines}</span>
      <span>Порожніх: {emptyLines}</span>
      <span>Остання операція: {lastOperationTime}мс</span>
    </div>
  );
}
