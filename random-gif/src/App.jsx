import RandomGif from "./components/RandomGif";
import GifBySearch from "./components/GifBySearch";


const App = () => {
    return (
        <div className=" flex flex-col items-center bg-slate-800 text-slate-50 h-full">
            <h1 className="text-2xl my-4">Random GIFs</h1>
            <RandomGif />
            <GifBySearch />
        </div>
    );
};

export default App;


//loading animation