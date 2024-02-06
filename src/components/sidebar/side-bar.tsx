import { CiCloudSun } from "react-icons/ci";
import logo from "../../logo.svg";
import s from "./side-bar.module.scss";
import { MENU } from "./sidebar.data";
import { CustomNavLink } from "./custum-nav-link";



export const SideBar: React.FC = () => {
  return (
    <aside className={s.sidebar}>
      <img src={logo} alt="logo" height={50} width={50} />
      <div>
        {MENU.map((item, index) => (
          <CustomNavLink to={item.url} key={index}>
            <item.icons size={27} />
          </CustomNavLink>
        ))}
      </div>
      <CiCloudSun size={27} color="yellow" />
    </aside>
  );
};
