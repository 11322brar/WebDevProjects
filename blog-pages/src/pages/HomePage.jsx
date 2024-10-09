import { useContext, useEffect, useState } from "react";
import AllCards from "../components/AllCards";
import { AppContext } from "../components/AppContext";
import Loading from "../components/Loading";
import PageControl from "../components/PageControl";

const HomePage = () => {
  const { loading, pageNumber, getData } = useContext(AppContext);

  useEffect(() => {getData(pageNumber)}, [pageNumber]);

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <Loading />
        </div>
      ) : (
        <AllCards />
      )}

      <PageControl />
    </div>
  );
};

export default HomePage;
