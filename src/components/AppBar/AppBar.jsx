import css from "./AppBar.module.css";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskForm } from "../TaskForm/TaskForm";
import { Typography } from "@mui/material";
export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <div className={css.counterBox}>
          <TaskCounter />
        </div>
        <div className={css.filterBox}>
          <Typography variant="h6">Filter by status</Typography>
          <StatusFilter />
        </div>
      </section>
      <section className={css.sectionTask}>
        <Typography variant="h6">Add your new task</Typography>
        <TaskForm />
      </section>
    </header>
  );
};
export default AppBar;
