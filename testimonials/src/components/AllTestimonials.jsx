import TestimonialCard from "./TestimonialCard";
import reviews from "../assets/testimonialData";
import Arrows from "./Arrows";

import { useState } from "react";
const AllTestimonials = () => {
    let [index, setIndex] = useState(0);

    return (
        <div>
            {
                <TestimonialCard
                    element={reviews[index]}
                    index={index}
                    setIndex={setIndex}
                />
            }
        </div>
    );
};

export default AllTestimonials;

//review 0-4 length 5
