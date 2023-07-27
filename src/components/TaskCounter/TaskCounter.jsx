import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import css from "./TaskCounter.module.css";
import { Button, ButtonGroup } from "@mui/material";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div className={css.counterBox}>
      <ButtonGroup
        sx={{ backgroundColor: "white" }}
        variant="outlined"
        disabled
      >
        <Button>Tasks Active: {count.active}</Button>
        <Button>Tasks Completed: {count.completed}</Button>
      </ButtonGroup>
    </div>
  );
};
