import React, { useCallback, useMemo, useRef, useState } from "react";
import Age from "./Age";
import IncrementButton from "./IncrementButton";
import MemoizedStudent from "./Student";

function Hooks() {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const increment = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );

  const memoizedStudent = useMemo(() => {
    return {
      name: "유진영",
      age: 20,
      gender: "male",
    };
  }, []);

  return (
    <div id="hooks" style={{ transition: "all 1000ms" }}>
      <h2 ref={countRef}>[ {count} ]</h2>

      <br />

      <div>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>

      <IncrementButton increment={increment} />
      <Age age={20} />
      <MemoizedStudent student={memoizedStudent} />
    </div>
  );
}

export default Hooks;
