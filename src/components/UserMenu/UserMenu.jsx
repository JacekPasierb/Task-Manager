import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import css from "./UserMenu.module.css"
export const UserMenu = () => {
    const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.wrapper}>
          <p className={css.username}>Welcome, {user.name}</p>
          {/* <button type="button" onAuxClick={()=>dispatch(logOut())}>LogOut</button> */}
    </div>
  );
};
