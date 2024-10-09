import { useState, useEffect } from "react";
import { apiUrl } from "./assets/data";
import Card from "./components/Card";

const AllCards = ({ filter }) => {
  // State to store API response
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setResponse(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResponse("Error loading data");
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure this runs only once when the component mounts

  let selectedCategories =
    filter == "All"
      ? ["Development", "Business", "Design", "Lifestyle"] // Show all categories if filter is "All"
      : [filter]; // Otherwise, only show the selected filter category

  let [likedCourses, setLikedCourses] = useState([]);

  // Render the cards for the selected categories
  return loading ? (
    <div className="flex h-screen justify-center">
      <div
        className="relative top-[35%] inline-block size-12 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600 dark:text-blue-500"
        role="status"
        aria-label="loading"
      ></div>
    </div> // Show an  loading indicator while loading
  ) : (
    <div className="m-auto grid w-4/6 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {selectedCategories.map((category) =>
        response?.data?.[category]?.map((element) => (
          <Card
            key={element.id}
            element={element}
            setLikedCourses={setLikedCourses}
            likedCourses={likedCourses}
          />
        )),
      )}
    </div>
  );
};
export default AllCards;
