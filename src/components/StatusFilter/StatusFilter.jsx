import { getStatusFilter } from "../../redux/selectors";
import css from "./StatusFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (selectedFilter) => {
    dispatch(setStatusFilter(selectedFilter));
  };

  return (
    <div className={css.wrapper}>
      <button
        className={filter === statusFilters.all ? css.selected : ""}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        className={filter === statusFilters.active ? css.selected : ""}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </button>
      <button
        className={filter === statusFilters.completed ? css.selected : ""}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </button>
    </div>
  );
};
export default StatusFilter;
