import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomGif = () => {
  const [gif, setGif] = useState("");

  async function getRandomGif(retryCount = 0) {
    const API_KEY = import.meta.env.VITE_API_KEY; // Ensure this is set in your .env file
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      if (response.data.meta.status === 200) {
        setGif(response.data.data.images.original.url);
      } else if (response.data.meta.status === 429 && retryCount < 5) {
        console.warn("Rate limit hit, retrying...");
        await new Promise((res) => setTimeout(res, Math.pow(2, retryCount) * 1000));
        getRandomGif(retryCount + 1); // Retry the fetch
      } else {
        console.error("Error fetching the random gif:", response.data.meta.msg);
      }
    } catch (error) {
      console.error("Error fetching the random gif:", error);
    }
  }

  function handleClick() {
    getRandomGif();
  }

  return (
    <div className="m-auto flex min-h-96 w-3/4 flex-col items-center rounded-md bg-slate-700">
      <h2 className="text-xl">A random gif</h2>
      <section className="my-4 border">
        {gif && <img src={gif} alt="a random gif" />}
      </section>
      <button
        className="rounded-md border bg-slate-800 p-2"
        onClick={handleClick}
      >
        Generate
      </button>
    </div>
  );
};

export default RandomGif;
