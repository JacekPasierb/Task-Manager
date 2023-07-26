import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../hooks/useAuth";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import css from "./AppContainer.module.css";

export const AppContainer = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{ justifyContent: "space-between", backgroundColor: "lightgreen" }}
        >
          <Navigation />
          {isLoggedIn ? (
            <div>
              <UserMenu />
            </div>
          ) : (
            <div>
              {" "}
              <AuthNav />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// export const AppContainer = () => {
//     const { isLoggedIn } = useAuth();
//     return (
//         <header className={css.header}>
//             <Navigation/>
// {isLoggedIn ? <div><UserMenu/></div> : <div> <AuthNav/></div>}
//         </header>
//     )
// }
