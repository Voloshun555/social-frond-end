import { useAppDispatch, useAppSelector } from "../../hooks/hook-redux";
import { CiLogout } from "react-icons/ci";
import { logOut } from "../../redux/auth/authOperation";
import s from "./currentUser.module.scss";

export const CurrentUser = () => {
  const dispotch = useAppDispatch();
  const loout = () => {
    dispotch(logOut());
  };

  const { name, email, avatar } = useAppSelector((user) => user.auth.user);

  return (
    <div className={s.currentUser}>
      <div className={s.wrapUser}>
        <img className={s.icon} src={avatar} alt="avatar" />

        <div>
          <h1>{name}</h1>
          <h2>{email}</h2>
        </div>
        <button onClick={loout}>
          <CiLogout size={40} />
        </button>
      </div>
    </div>
  );
};
