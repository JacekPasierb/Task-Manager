import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/operations";
import { Checkbox, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => {
    dispatch(toggleCompleted(task));
  };

  return (
    <div className={css.wrapper}>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        checked={task.completed}
        onChange={handleToggle}
      />

      <Typography variant="h5" component="h2">
        {task.text.toUpperCase()}
      </Typography>
      <button className={css.btn} onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};
