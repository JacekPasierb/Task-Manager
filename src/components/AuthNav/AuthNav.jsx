import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"
import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
export const AuthNav = () => {
    return (
      <div>
        <NavLink className={css.link} to="/register">
          <Button variant="outlined" endIcon={<BookmarkAddIcon/>}>Register</Button>
        </NavLink>
        <NavLink className={css.link} to="/login">
          <Button variant="outlined" endIcon={<LoginIcon/>}>Log In</Button>
        </NavLink>
      </div>
    );
}