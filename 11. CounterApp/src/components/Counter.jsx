import "./Counter.css";
import { useState } from "react";

export function Counter(props) {
  let [count, setCountValue] = useState(props.count);
  console.log("count =>", count);

  return (
    <div id="counter">
      <button id="minus" onClick={() => setCountValue(--count)}>
        -
      </button>
      <p id="count">{count}</p>
      <button id="plus" onClick={() => setCountValue(++count)}>
        +
      </button>
    </div>
  );
}
