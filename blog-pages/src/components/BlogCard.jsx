import { Link } from "react-router-dom";

const BlogCard = ({ element }) => {
  const { title, author, date, category, tags, content, img } = element;

  return (
    <div className="my-2">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>
        <span>By </span>
        <span className="italic">{author} </span>
        <span>on </span>
        <Link
          to={`/category/${category}`}
          className="font-semibold underline"
        >
          {category}
        </Link>
      </p>
      <p className="mb-2">
        <span>Posted On </span>
        {date}
      </p>
      <p className="">{content}</p>
      {tags.map((element, index) => {
        return (
          <Link
            to={`/tag/${element}`}
            key={`${index}`}
            className="mr-2 text-blue-800 underline"
          >
            #{element}
          </Link>
        );
      })}
    </div>
  );
};

export default BlogCard;
