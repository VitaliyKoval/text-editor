import FindReplace from "./components/FindReplace";
import Editor from "./components/Editor";
import Toolbar from "./components/Toolbar";
import StatusBar from "./components/StatusBar";
import Button from "./components/Button";
import { useMemo } from "react";
import { calculateMetrics } from "./utils/metrics";

import { useTextProcessor } from "./hooks/useTextProcessor";

function App() {
  const {
    handleOperation,
    current,
    push,
    lastOperationTime = 0,
  } = useTextProcessor();
  const metrics = useMemo(() => calculateMetrics(current), [current]);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
        <Toolbar onOperation={handleOperation} />

        <FindReplace
          onReplace={(find, replace) =>
            handleOperation("findReplace", { find, replace })
          }
        >
          <div className="mx-2 border-l border-gray-300" />
          <Button onClick={() => handleOperation("upload")}>Завантажити</Button>
          <Button onClick={() => handleOperation("download")}>Зберегти</Button>
        </FindReplace>

        <div className="flex">
          <Editor
            value={current}
            onChange={(e) => {
              const newValue = e.target.value;
              push(newValue);
            }}
          />
        </div>
        <StatusBar {...metrics} lastOperationTime={lastOperationTime} />
      </div>
    </div>
  );
}

export default App;
