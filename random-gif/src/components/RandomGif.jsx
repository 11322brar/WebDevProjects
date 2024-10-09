import useGifGetter from "../hooks/useGifGetter.js";

const RandomGif = () => {
  const {randomGif, getGif, loading  } = useGifGetter();
  return (
    <div className="m-auto flex min-h-96 w-3/4 flex-col items-center rounded-md bg-slate-700">
      <h2 className="text-xl">A random gif</h2>
      <section className="my-4 border">
        <img src={randomGif} alt="a random gif" />
      </section>
      <button
        className="rounded-md border bg-slate-800 p-2"
        onClick={getGif}
      >
        Generate
      </button>
    </div>
  );
};

export default RandomGif;
