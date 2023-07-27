import css from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";
import { Button, TextField } from "@mui/material";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        
        name="text"
        type="text"
        placeholder="Enter task text..."
        variant="outlined"
      />
      <Button variant="contained" color="success" type="submit">Add task</Button>
    </form>
  );
};
export default TaskForm;
