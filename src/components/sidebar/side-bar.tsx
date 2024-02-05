import { Link } from "react-router-dom";
import { CiCloudSun, CiSettings } from "react-icons/ci";
import { FiUsers, FiPhone } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import logo from "../../logo.svg";
import s from "./side-bar.module.scss"

export const SideBar = () => {
  return (
    <aside className={s.sidebar}>
      <img src={logo} alt="logo" height={50} width={50} />
      <div>
        <Link to="/">
          <FiUsers size={27} color="yellow " />
        </Link>
        <Link to="/">
          <FiPhone size={27} color="yellow " />
        </Link>
        <Link to="/">
          <TiMessages size={27} color="yellow " />
        </Link>
        <Link to="/">
          <CiSettings size={27} color="yellow "/>
        </Link>
      </div>
      <CiCloudSun size={27} color="yellow "/>
    </aside>
  );
};
