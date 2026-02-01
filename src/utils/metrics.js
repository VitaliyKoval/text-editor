export function calculateMetrics(text) {
  const lines = text.split(/\r?\n/);

  return {
    totalLines: lines.length,
    emptyLines: lines.filter((line) => line.trim() === "").length,
    totalChars: text.length,
    totalWords: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
  };
}
