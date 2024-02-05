import { CiCloudSun } from "react-icons/ci";
import logo from "../../logo.svg";
import s from "./side-bar.module.scss";
import { MENU } from "./sidebar.data";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className={s.sidebar}>
      <img src={logo} alt="logo" height={50} width={50} />
      <div>
        {MENU.map((item) => (
          <NavLink to={item.url} key={item.url} >
            <item.icons size={27} />
          </NavLink>
        ))}
      </div>
      <CiCloudSun size={27} color="yellow " />
    </aside>
  );
};
