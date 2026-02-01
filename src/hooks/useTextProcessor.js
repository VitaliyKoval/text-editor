import { useCallback, useState, useEffect } from "react";
import * as textOps from "../utils/textOperations";
import { useHistory } from "./useHistory";

const STORAGE_KEY = "text-editor";

export function useTextProcessor() {
  const savedText = localStorage.getItem(STORAGE_KEY) || "";
  const [lastOperationTime, setLastOperationTime] = useState(0);
  const { current, push, undo, redo } = useHistory(savedText);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, current);
    }, 1000);

    return () => clearTimeout(timer);
  }, [current]);

  const handleOperation = useCallback(
    async (operation, data) => {
      const startTime = performance.now();
      let newText = current;

      switch (operation) {
        case "upper":
          newText = textOps.toUpperCase(current);
          break;
        case "lower":
          newText = textOps.toLowerCase(current);
          break;
        case "capitalize":
          newText = textOps.capitalizeWords(current);
          break;
        case "capitalizeFirst":
          newText = textOps.capitalizeFirstWord(current);
          break;
        case "trimSpaces":
          newText = textOps.trimSpaces(current);
          break;
        case "removeTabs":
          newText = textOps.removeTabs(current);
          break;
        case "collapseSpaces":
          newText = textOps.collapseSpaces(current);
          break;
        case "cleanText":
          newText = textOps.cleanText(current);
          break;
        case "clear":
          newText = "";
          break;
        case "addPlus":
          newText = textOps.addPlus(current);
          break;
        case "removePlus":
          newText = textOps.removePlus(current);
          break;
        case "addQuotes":
          newText = textOps.addQuotes(current);
          break;
        case "addBrackets":
          newText = textOps.addBrackets(current);
          break;
        case "addDash":
          newText = textOps.addDash(current);
          break;
        case "addDashBrackets":
          newText = textOps.addDashBrackets(current);
          break;
        case "addDashQuotes":
          newText = textOps.addDashQuotes(current);
          break;
        case "removeAfterDash":
          newText = textOps.removeAfterDash(current);
          break;
        case "spacesToUnderscore":
          newText = textOps.spacesToUnderscore(current);
          break;
        case "removeSpecialChars":
          newText = textOps.removeSpecialChars(current);
          break;
        case "specialCharsToSpaces":
          newText = textOps.specialCharsToSpaces(current);
          break;
        case "sortAZ":
          newText = textOps.sortAZ(current);
          break;
        case "sortZA":
          newText = textOps.sortZA(current);
          break;
        case "unique":
          newText = textOps.unique(current);
          break;
        case "findReplace": {
          const { find, replace } = data;
          newText = textOps.findReplace(current, find, replace);
          break;
        }
        case "upload": {
          (async () => {
            const startTimeOp = performance.now();
            const text = await textOps.uploadText();
            const endTimeOp = performance.now();
            setLastOperationTime(endTimeOp - startTimeOp);
            if (text !== null && text !== undefined) {
              push(text);
            }
          })();
          return;
        }
        case "download":
          {
            const startTimeDownload = performance.now();
            textOps.downloadText(current, "text.txt");
            const endTimeDownload = performance.now();
            setLastOperationTime(endTimeDownload - startTimeDownload);
          }
          return;
        case "copy":
          (async () => {
            const startTimeCopy = performance.now();
            await navigator.clipboard.writeText(current);
            const endTimeCopy = performance.now();
            setLastOperationTime(endTimeCopy - startTimeCopy);
          })();
          return;
        case "undo":
          {
            const startTimeUndo = performance.now();
            undo();
            const endTimeUndo = performance.now();
            setLastOperationTime(endTimeUndo - startTimeUndo);
          }
          return;
        case "redo":
          {
            const startTimeRedo = performance.now();
            redo();
            const endTimeRedo = performance.now();
            setLastOperationTime(endTimeRedo - startTimeRedo);
          }
          return;
        default:
          console.log("Невідома операція:", operation);
      }
      const endTime = performance.now();
      setLastOperationTime(endTime - startTime);

      if (newText !== current) {
        push(newText);
      }
    },
    [current, push, undo, redo],
  );

  return {
    handleOperation,
    current,
    push,
    lastOperationTime,
  };
}
