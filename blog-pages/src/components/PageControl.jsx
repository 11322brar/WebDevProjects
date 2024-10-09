import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const PageControl = () => {
  const {
    pageNumber,
    handleNextButton,
    handlePreviousButton,
    isDeactivatedNext,
    isDeactivatedPrevious,
    totalPages
  } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 w-full rounded-lg bg-white">
      <div className="m-auto flex w-8/12 items-center justify-between p-4">
        <div className="flex gap-4">
          <button
            onClick={handlePreviousButton}
            className={
              isDeactivatedPrevious
                ? "cursor-not-allowed rounded-md border border-black px-2 py-1"
                : "rounded-md border border-black px-2 py-1"
            }
          >
            Previous
          </button>

          <button
            onClick={handleNextButton}
            className={
              isDeactivatedNext
                ? "cursor-not-allowed rounded-md border border-black px-2 py-1"
                : "rounded-md border border-black px-2 py-1"
            }
          >
            Next
          </button>
        </div>
        <p>
          Page {pageNumber} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default PageControl;
