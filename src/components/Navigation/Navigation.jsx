import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav style={{display:"flex"}}>
      <NavLink
        className={css.link}
        to="/"
        style={{ display: "flex", gap: "10px", justifyItems: "center" }}
      >
        <HomeIcon sx={{ color: "blue" }} /> Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.link}
          to="/tasks"
          style={{ display: "flex", gap: "10px", justifyItems: "center" }}
        >
          <AssignmentIcon sx={{ color: "blue" }} /> Tasks
        </NavLink>
      )}
    </nav>
  );
};
