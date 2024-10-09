import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import BlogCard from "../components/BlogCard";
const TagPage = () => {
  const { tag, setTag, getData, apiData, pageNumber } = useContext(AppContext);
  console.log("apiData:", apiData);

  const location = useLocation();

  console.log("tag:", tag);
  // Set tag based on the URL
  useEffect(() => {
    const newTag = location.pathname.split("/").at(-1);
    if (newTag !== tag) {
      setTag(newTag); // Only update tag if it changes
    }
  }, [location.pathname]); // This effect runs whenever the location (URL) changes

  // Fetch data when the tag is updated
  useEffect(() => {
    if (tag) {
      getData(pageNumber, tag); // Fetch the data for the current tag
    }
  }, [tag, pageNumber]); // This effect runs whenever `tag` or `pageNumber` changes
  const navigate = useNavigate();
  return (
    <div>
      <div className="mx-auto my-24 flex w-8/12 flex-col justify-between">
        <span>
          <button
            onClick={() => navigate(-1)}
            className="mr-2 rounded-md border border-black px-2 py-1"
          >
            Back
          </button>
          Blogs tagged with <span className="font-bold">{tag?.replace("%20", " ")}</span>
        </span>

        {apiData.posts?.map((element) => (
          <BlogCard key={element.id} element={element}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default TagPage;
