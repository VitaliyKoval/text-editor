import { useState } from "react";
import Button from "./Button";

export default function FindReplace({ onReplace, children }) {
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  return (
    <div className="flex gap-2 p-2 bg-gray-100">
      <input
        type="text"
        placeholder="Знайти..."
        value={find}
        onChange={(e) => setFind(e.target.value)}
        className="p-1 border rounded"
      />
      <input
        type="text"
        placeholder="Замінити на..."
        value={replace}
        onChange={(e) => setReplace(e.target.value)}
        className="p-1 border rounded"
      />
      <Button onClick={() => onReplace(find, replace)}>Замінити</Button>
      {children}
    </div>
  );
}
