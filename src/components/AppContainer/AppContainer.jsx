import { AppBar, Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../hooks/useAuth";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import css from "./AppContainer.module.css";

export const AppContainer = () => {
  const { isLoggedIn } = useAuth();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isTablet ? "row" : "column",
            justifyContent: isTablet ? "center" : "space-between",
            backgroundColor: "lightgreen",
            padding:"10px",
            
          }}
        >
          <Navigation />
          {isLoggedIn ? (
            <div >
              <UserMenu />
            </div>
          ) : (
            <div>
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
