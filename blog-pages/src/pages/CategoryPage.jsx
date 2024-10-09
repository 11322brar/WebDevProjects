import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";
import BlogCard from "../components/BlogCard";
const CategoryPage = () => {
  const { pageNumber, getData, apiData } = useContext(AppContext);
  console.log("apiData:", apiData);
  const location = useLocation();
  const locationParams = location.pathname.split("/");
  console.log("locationParams:", locationParams);
  const [category, setCategory] = useState(locationParams.at(-1));

  useEffect(() => {
    const newCategory = location.pathname.split("/").at(-1);
    if (newCategory !== category) {
      setTag(newCategory);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (category) {
      getData(pageNumber, null, category);
    }
  }, [category, pageNumber]);
  return (
    <div className="mx-auto my-24 flex w-8/12 flex-col justify-between">
      {apiData.posts?.map((element, index) => (
        <BlogCard key={index} element={element} />
      ))}
    </div>
  );
};

export default CategoryPage;
