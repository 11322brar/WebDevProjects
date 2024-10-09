import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

export default function AppContextProvider({ children }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [tag, setTag] = useState();

  async function getData(pageNumber, tag, category) {
    setLoading(true);
    try {
       // Start with the page number in the URL
    let url = `${baseUrl}?page=${pageNumber}`;

    // Append the tag if it's provided
    if (tag) {
      url += `&tag=${tag}`;
    }

    // Append the category if it's provided
    if (category) {
      url += `&category=${category}`;
    }

      
      console.log('working url:', url)
      const output = await fetch(url).then((response) => response.json());
      setApiData(output);
      setTotalPages(output.totalPages);
    } catch (error) {
      console.log("Error in fetching API:", error);
    }
    setLoading(false);
  }

  // Handling navigation buttons
  const [isDeactivatedNext, setIsDeactivatedNext] = useState(false);
  const [isDeactivatedPrevious, setIsDeactivatedPrevious] = useState(false);
  function handleNextButton() {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      setIsDeactivatedNext(false);
    } else {
      setIsDeactivatedNext(true);
    }
  }
  function handlePreviousButton() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      setIsDeactivatedPrevious(false);
    } else {
      setIsDeactivatedPrevious(true);
    }
  }

  const value = {
    totalPages,
    setTotalPages,
    getData,
    tag,
    setTag,
    pageNumber, // Current page number
    setPageNumber, // Function to manually set page number
    loading, // Loading state
    apiData, // Fetched API data
    setApiData, // Function to manually set API data
    handleNextButton, // Function to handle Next button click
    handlePreviousButton, // Function to handle Previous button click
    isDeactivatedNext, // Boolean to track if Next button is deactivated
    setIsDeactivatedNext, // Function to manually set Next button deactivation state
    isDeactivatedPrevious, // Boolean to track if Previous button is deactivated
    setIsDeactivatedPrevious, // Function to manually set Previous button deactivation state
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
