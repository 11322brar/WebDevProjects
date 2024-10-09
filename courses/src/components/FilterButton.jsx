
const FilterButton = (props) => {
  function handleClick() {
    props.setFilter(props.title);
  }

  return (
    <button
      onClick={handleClick}
      className="transform rounded-lg bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-100"
    >
      {props.title}
    </button>
  );
};

export default FilterButton;
