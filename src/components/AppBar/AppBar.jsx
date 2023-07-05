import css from "./AppBar.module.css";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskForm } from "../TaskForm/TaskForm";
export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <div className={css.counterBox}>
          <h2 className={css.title}>Tasks</h2>
          <TaskCounter />
        </div>
        <div className={css.filterBox}>
          <h2 className={css.title}>Filter by status</h2>
          <StatusFilter />
        </div>
      </section>
      <section className={css.sectionTask}>
        <h2 className={css.title}>Add your new task</h2>
        <TaskForm />
      </section>
    </header>
  );
};
export default AppBar;
