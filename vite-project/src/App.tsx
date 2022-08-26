import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Select, DatePicker } from "antd";
import Cascade from "./cascade";

const { Option } = Select;

function App() {
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState([
    {
      key: "_1",
      value: "opt1",
    },
    {
      key: "_2",
      value: "opt2",
    },
    {
      key: "_3",
      value: "opt3",
    },
    {
      key: "_3",
      value: "opt3",
    },
  ]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Select>
        {options.map((item) => (
          <Option key={item.key} value={item.value}>
            {item.value}
          </Option>
        ))}
      </Select>
      <Cascade />
      <DatePicker />
      
    </div>
  );
}

export default App;
