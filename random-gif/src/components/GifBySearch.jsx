import { useState } from "react";
import useGifGetter from "../hooks/useGifGetter.js";

const GifBySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchedGif, getGif, loading } = useGifGetter(searchTerm);
  return (
    <div className="m-auto flex min-h-96 w-3/4 flex-col items-center rounded-md bg-slate-700">
      <h2 className="text-xl">A random {searchTerm} gif</h2>
      <section className="my-4 border">
        <img src={searchedGif} alt={`A random ${searchTerm} gif`} />
      </section>
      <label htmlFor="searchTermInput">Search by keywords</label>
      <input
        className="my-2 bg-slate-800 text-slate-100"
        type="text"
        name="searchTermInput"
        id="searchTermInput"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        // onKeyPress={(event)=>event.key=='Enter'?handleClick():console.log(`notenter`)}
      />
      <button
        className="rounded-md border bg-slate-800 p-2"
        onClick={() => getGif(searchTerm)}
      >
        Generate
      </button>
    </div>
  );
};

export default GifBySearch;
