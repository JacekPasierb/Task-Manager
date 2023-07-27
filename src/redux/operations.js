import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";


export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text });
      Notiflix.Notify.success("Add Task Success");
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure("Not Add Task");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      Notiflix.Notify.success("Deleted Task Success");
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure("Not Deleted Task");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      Notiflix.Notify.success("Change Status Task");
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure("Not Change Status Task");
      return thunkAPI.rejectWithValue('polo',e.message);
    }
  }
);
