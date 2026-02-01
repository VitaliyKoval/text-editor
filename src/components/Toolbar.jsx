import Button from "./Button";

export default function Toolbar({ onOperation }) {
  return (
    <div className="flex flex-wrap gap-2 p-3 border-b border-gray-200">
      <Button onClick={() => onOperation("clear")} variant="danger">
        Очистити
      </Button>
      <Button onClick={() => onOperation("copy")}>Копіювати</Button>
      <div className="mx-2 border-l border-gray-300" />
      <Button onClick={() => onOperation("undo")}>Undo</Button>
      <Button onClick={() => onOperation("redo")}>Redo</Button>
      <div className="mx-2 border-l border-gray-300" />
      <Button onClick={() => onOperation("upper")}>АБВ</Button>
      <Button onClick={() => onOperation("lower")}>абв</Button>
      <div className="mx-2 border-l border-gray-300" />
      <Button onClick={() => onOperation("capitalize")}>Aбв Aбв</Button>
      <Button onClick={() => onOperation("capitalizeFirst")}>Aбв aбв</Button>
      <div className="mx-2 border-l border-gray-300" />
      <Button onClick={() => onOperation("trimSpaces")}>Краї</Button>
      <Button onClick={() => onOperation("removeTabs")}>Таби</Button>
      <Button onClick={() => onOperation("collapseSpaces")}>Пробіл</Button>
      <Button onClick={() => onOperation("cleanText")}>Очистити</Button>
      <div className="mx-2 border-l border-gray-300" />
      <Button onClick={() => onOperation("addQuotes")}>"Текст"</Button>
      <Button onClick={() => onOperation("addBrackets")}>[Текст]</Button>
      <Button onClick={() => onOperation("addDash")}>-Текст</Button>
      <Button onClick={() => onOperation("addDashBrackets")}>-[Текст]</Button>
      <Button onClick={() => onOperation("addDashQuotes")}>-"Текст"</Button>
      <div className="mx-2 border-l border-gray-300" />
      <Button onClick={() => onOperation("addPlus")}>Додати+</Button>
      <Button onClick={() => onOperation("removePlus")}>Видал+</Button>
      <div className="mx-2 border-l border-gray-300" />
      <Button onClick={() => onOperation("removeAfterDash")}>Після-</Button>
      <Button onClick={() => onOperation("spacesToUnderscore")}>Проб_</Button>
      <Button onClick={() => onOperation("removeSpecialChars")}>БезСпец</Button>
      <Button onClick={() => onOperation("specialCharsToSpaces")}>
        СпецПроб
      </Button>
      <div className="mx-2 border-l border-gray-300" />
      <Button onClick={() => onOperation("sortAZ")}>А-Я</Button>
      <Button onClick={() => onOperation("sortZA")}>Я-А</Button>
      <Button onClick={() => onOperation("unique")}>Унікал</Button>
    </div>
  );
}
