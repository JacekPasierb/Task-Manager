import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import css from "./Navigation.module.css";
import { Button } from "@mui/material";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav style={{ display: "flex" }}>
      <NavLink
        className={css.link}
        to="/"
        style={{ display: "flex", gap: "10px", justifyItems: "center" }}
      >
        <Button
          variant="text"
          startIcon={<HomeIcon />}
          sx={{ paddingInline: "50px", borderRadius: "20px" }}
        >
          Home
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.link}
          to="/tasks"
          style={{ display: "flex", gap: "10px", justifyItems: "center" }}
        >
          <Button
            variant="text"
            startIcon={<AssignmentIcon />}
            sx={{ paddingInline: "50px", borderRadius: "20px" }}
          >
            Tasks
          </Button>
        </NavLink>
      )}
    </nav>
  );
};
