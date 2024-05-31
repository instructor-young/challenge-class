import { useState } from "react";
import "./App.css";
import Hooks from "./components/Hooks";

function App() {
  const [isHooksMounted, setIsHooksMounted] = useState(false);

  return (
    <main>
      <hr />
      <div>
        <button onClick={() => setIsHooksMounted(true)}>Hooks 마운트</button>
        <button onClick={() => setIsHooksMounted(false)}>Hooks 마운트</button>
      </div>

      <hr />

      {isHooksMounted && <Hooks />}
    </main>
  );
}

export default App;
