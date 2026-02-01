import { useState, useCallback } from "react";

export function useHistory(initialValue = "", maxHistory = 10) {
  const [history, setHistory] = useState([initialValue]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const current = history[historyIndex];

  const push = useCallback(
    (newValue) => {
      setHistory((prev) => {
        const newHistory = prev.slice(0, historyIndex + 1);
        newHistory.push(newValue);

        if (newHistory.length > maxHistory) {
          newHistory.shift();
          return newHistory;
        }

        return newHistory;
      });

      setHistoryIndex((prev) => Math.min(prev + 1, maxHistory - 1));
    },
    [historyIndex, maxHistory],
  );

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1);
    }
  }, [historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1);
    }
  }, [historyIndex, history.length]);

  return {
    current,
    push,
    undo,
    redo,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
    historyLength: history.length,
  };
}
