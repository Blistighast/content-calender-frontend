import { useState } from "react";
import "./App.css";
import TempFetcher from "./assets/Components/TempFetcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Content Calender</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <TempFetcher />
    </>
  );
}

export default App;
