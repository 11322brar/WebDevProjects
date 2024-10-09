import "./App.css";
import Heading from "./components/Heading";
import Filters from "./components/Filters";
import AllCards from "./AllCards";
import { useState } from "react";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <div>
      <Heading />
      <Filters setFilter={setFilter} />
      <AllCards filter={filter} />
      <ToastContainer/>
    </div>
  );
}

export default App;

//media query
//filter button border when clicked
