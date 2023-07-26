import { getStatusFilter } from "../../redux/selectors";
import css from "./StatusFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";
import { Button, ButtonGroup } from "@mui/material";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (selectedFilter) => {
    dispatch(setStatusFilter(selectedFilter));
  };

  return (
    <ButtonGroup sx={{backgroundColor:"white"}} aria-label="outlined button group" color="success">
      <Button
        variant={filter === statusFilters.all ? "contained" : "outlined"}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        variant={filter === statusFilters.active ? "contained" : "outlined"}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        variant={filter === statusFilters.completed ? "contained" : "outlined"}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};
export default StatusFilter;
