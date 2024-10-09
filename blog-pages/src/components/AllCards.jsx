import React, { useContext } from "react";
import { AppContext } from "./AppContext";

import BlogCard from "./BlogCard";

const AllCards = () => {
  const { apiData } = useContext(AppContext);

  return (
    <div className="mx-auto my-24 flex w-8/12 flex-col justify-between ">
      {apiData.posts.map((element) => (
        <BlogCard key={element.id} element={element}></BlogCard>
      ))}
    </div>
  );
};

export default AllCards;
