import { useState } from "react";

const Card = ({ image, price, name, info }) => {

    let [addedText, setAddedText] = useState('Read More')
    let [description, setDescription] = useState(info.substring(0, 200) + '...')

    function handleAddedText() {
        if (addedText == 'Read More') {
            setAddedText('Show Less')
            setDescription(info)
        }
        else {
            setAddedText('Read More')
            setDescription(info.substring(0, 200) + '...')
        }
    }

    let [isVisible, setVisibility] = useState(true)

    function handleNotInterested() {
        setVisibility(false)
    }

    if (!isVisible)
        return null

    return (
        <div id="card" className="w-full h-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            {/* IMAGE */}
            <img
                className="object-cover object-center w-full h-56"
                src={image}
                alt="avatar"
            />

            {/* PRICE */}
            <div className="flex items-center px-6 py-3 bg-gray-900">
                <h1 className="mx-3 text-lg font-semibold text-white">{price}</h1>
            </div>

            {/* NAME */}
            <div className="px-6 py-4 flex flex-col">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {name}
                </h1>

                {/* INFO */}
                <p className="py-2 text-gray-700 dark:text-gray-400">
                    {description}
                    <span className="text-blue-600 cursor-pointer ml-2" onClick={handleAddedText}>
                        {addedText}</span>
                </p>
                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                </div>


                {/* BUTTON */}
                <button className="bg-black rounded-lg text-sm sm:text-base flex items-center gap-x-3 justify-center text-white hover:bg-black/80 duration-300 transition-colors border border-transparent px-8 py-2.5 self-center"
                    onClick={handleNotInterested}>
                    <span>Not Interested</span>
                </button>
            </div>
        </div>

    )
}

export default Card
