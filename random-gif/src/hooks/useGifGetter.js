import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;


const useGifGetter = (searchTermArg) => {
  const [randomGif, setRandomGif] = useState("");
  const [searchedGif, setSearchedGif] = useState("");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Calls getGif whenever searchTermArg changes
    getGif(searchTermArg);
  }, [searchTermArg]);  // Added searchTermArg as a dependency

  async function getGif(searchTermArg) {
    setLoading(true)
    try {
      if (searchTermArg) {
        console.log('in case of search gif', searchTermArg);

        const urlForSearch = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTermArg}&limit=1`;
        await axios.get(urlForSearch)
          .then((response) => setSearchedGif(response.data.data[0].images.fixed_height.url))
      }
      else {
        console.log('in case of random gif', searchTermArg);

        const urlForRandom = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        await axios.get(urlForRandom)
          .then((response => setRandomGif(response.data.data.images.fixed_height.url)))
      }
    } catch (error) {
      console.log('error:', error)
    }


    setLoading(false)
  }


  return { randomGif, searchedGif, getGif, loading };
}

export default useGifGetter;

