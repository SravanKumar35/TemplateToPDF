import logo from "./logo.svg";
import "./App.css";
import Template from "./templates/template";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const [canDownload, setCanDownload] = useState(false);

  const toggleCanDownload = () => {
    setCanDownload(!canDownload);
    if (canDownload) {
      setFirst(false)
      setSecond(false)
      setThird(false)
    }
  };

  return (
    <div className="App">
      <div className="templates">
        <div className="template">
          <Template
            value={1}
            print={first && canDownload}
            toggleCanDownload={toggleCanDownload}
          />
        </div>
        <div className="template">
          <Template
            value={2}
            print={second && canDownload}
            toggleCanDownload={toggleCanDownload}
          />
        </div>
        <div className="template">
          <Template
            value={3}
            print={third && canDownload}
            toggleCanDownload={toggleCanDownload}
          />
        </div>
      </div>

      <div className="checkboxes">
        <div>
          <span>Please check this box to download: </span>
          <input
            type="checkbox"
            name="template1"
            value="Template1"
            checked={first}
            onChange={() => {
              setFirst(!first);
            }}
          />
        </div>
        <div>
          <span>Please check this box to download: </span>
          <input
            type="checkbox"
            name="template2"
            value="Template2"
            checked={second}
            onChange={() => {
              setSecond(!second);
            }}
          />
        </div>
        <div>
          <span>Please check this box to download: </span>
          <input
            type="checkbox"
            name="template3"
            value="Template3"
            checked={third}
            onChange={() => {
              setThird(!third);
            }}
          />
        </div>
      </div>

      <button onClick={toggleCanDownload}>Download</button>
    </div>
  );
}

export default App;
