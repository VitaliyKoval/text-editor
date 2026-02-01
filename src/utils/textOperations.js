function processLines(text, callback) {
  return text.split("\n").map(callback).join("\n");
}

function processWords(words, callback) {
  return words.split(" ").map(callback).join(" ");
}

function processSort(text, callback) {
  return text.split("\n").sort(callback).join("\n");
}

export function toUpperCase(text) {
  return processLines(text, (line) => line.toUpperCase());
}

export function toLowerCase(text) {
  return processLines(text, (line) => line.toLowerCase());
}

export function capitalizeWords(text) {
  return processLines(text, (line) =>
    processWords(line, (word) => word.charAt(0).toUpperCase() + word.slice(1)),
  );
}

export function capitalizeFirstWord(text) {
  return processLines(text, (line) => {
    const newLine = line.toLowerCase();
    return newLine.charAt(0).toUpperCase() + newLine.slice(1);
  });
}

export function trimSpaces(text) {
  return processLines(text, (line) => line.trim());
}

export function removeTabs(text) {
  return processLines(text, (line) => line.replace(/\t/g, ""));
}

export function collapseSpaces(text) {
  return processLines(text, (line) => line.replace(/\s+/g, " ").trim());
}

export function cleanText(text) {
  return processLines(text, (line) =>
    line.replace(/\t/g, "").replace(/\s+/g, " ").trim(),
  );
}

export function addPlus(text) {
  return processLines(text, (line) =>
    processWords(line, (word) => (word ? `+${word}` : word)),
  );
}

export function removePlus(text) {
  return processLines(text, (line) =>
    processWords(line, (word) => word.replace(/^\+/, "")),
  );
}

export function addQuotes(text) {
  return processLines(text, (line) => `"${line}"`);
}

export function addBrackets(text) {
  return processLines(text, (line) => `[${line}]`);
}

export function addDash(text) {
  return processLines(text, (line) => `-${line}`);
}

export function addDashBrackets(text) {
  return processLines(text, (line) => `-[${line}]`);
}

export function addDashQuotes(text) {
  return processLines(text, (line) => `-"${line}"`);
}

export function removeAfterDash(text) {
  return processLines(text, (line) => line.split(" -")[0]);
}

export function spacesToUnderscore(text) {
  return processLines(text, (line) => line.replace(/ /g, "_"));
}

export function removeSpecialChars(text) {
  const specialChars = /[()~!@#$%^&*_=+[\]{}\\|;:'",/<>?]/g;
  return processLines(text, (line) => line.replace(specialChars, ""));
}

export function specialCharsToSpaces(text) {
  const specialChars = /[()~!@#$%^&*_=+[\]{}\\|;:'",/<>?]/g;
  return processLines(text, (line) => line.replace(specialChars, " "));
}

export function sortAZ(text) {
  return processSort(text, (a, b) => a.localeCompare(b, ["uk", "ru", "en"]));
}

export function sortZA(text) {
  return processSort(text, (a, b) => b.localeCompare(a, ["uk", "ru", "en"]));
}

export function unique(text) {
  return [...new Set(text.split("\n"))].join("\n");
}

export function findReplace(text, find, replace) {
  if (!find) return text;
  return processLines(text, (line) => line.split(find).join(replace));
}

export function downloadText(text, filename = "text.txt") {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function uploadText() {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt,.csv,.text";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) {
        resolve("");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsText(file);
    };
    input.click();
  });
}
