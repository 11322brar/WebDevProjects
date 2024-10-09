import { filterData } from "../assets/data";
import FilterButton from "./FilterButton";

const Filters = ({setFilter}) => {
  return (
    <div className="flex items-center justify-center gap-6 p-4">
      {filterData.map((element) => (
        <FilterButton
          key={element.id}
          title={element.title}
          setFilter={setFilter} 
        ></FilterButton>
      ))}
    </div>
  );
};

export default Filters;
