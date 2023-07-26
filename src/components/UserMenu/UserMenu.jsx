import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import Typography from "@mui/material/Typography";
import css from "./UserMenu.module.css"
import { logOut } from "../../redux/auth/operations";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
export const UserMenu = () => {
    const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.wrapper}>
      <Typography variant="h6">Welcome , {user.email} </Typography>
      <Button
        variant="outlined"
        startIcon={<LogoutIcon />}
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </Button>
     
    </div>
  );
};
