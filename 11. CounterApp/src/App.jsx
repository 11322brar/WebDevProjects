import "./App.css";
import { Counter } from "./components/Counter";

export default function App() {
  return (
    <div id="main-container">
      <div id="counter-container">
        <p id="para">Increment and decrement</p>
        <Counter count="0"></Counter>
      </div>
    </div>
  );
}
