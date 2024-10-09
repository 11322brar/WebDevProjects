import React from "react";
import reviews from "../assets/testimonialData";

const Arrows = ({ index, setIndex }) => {
    function handleLeftArrow() {
        if (index == 0) setIndex(reviews.length - 1);
        else setIndex(--index);
    }
    function handleRightArrow() {
        if (index == reviews.length - 1) setIndex(0);
        else setIndex(++index);
    }

    return (
        <div className="flex items-center justify-between mt-6 md:justify-start">
            <button
                title="left arrow"
                onClick={handleLeftArrow}
                className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                title="right arrow"
                onClick={handleRightArrow}
                className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Arrows;
