import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ element, likedCourses, setLikedCourses }) => {
  function handleLike() {
    if (likedCourses.includes(element.title)) {
      {
        setLikedCourses(
          likedCourses.filter((course) => course != element.title));
          toast.error("Removed from liked list");

      }
    } else {
      setLikedCourses([...likedCourses, element.title]);
      toast.success("Liked successfully");
    }
  }

  return (
    //outer box
    <div className="max-w-xs overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
      {/* inner box */}
      <div className="px-4 pt-2 pb-8">
        {/* image and like icon */}
        <div className="relative mb-4">
          <img
            className="mt-2 w-full object-cover"
            src={element.image.url}
            alt={element.image.alt}
          />
          <button
            onClick={handleLike}
            className="absolute bottom-[-1rem] right-0 rounded-full bg-white p-2 text-3xl transition-colors hover:bg-gray-200 focus:outline-none"
          >
            {likedCourses.includes(element.title) ? (
              <FcLike />
            ) : (
              <FcLikePlaceholder />
            )}
          </button>
        </div>

        <h1 className="text-xl font-bold uppercase text-gray-800 dark:text-white">
          {element.title}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {element.description.substring(0,200)+'...'}
        </p>
      </div>
    </div>
  );
};

export default Card;
