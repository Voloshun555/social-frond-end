import { CiCloudSun } from "react-icons/ci";
import logo from "../../logo.svg";
import { useAuth } from "../../hooks/useAuth";
import { SideLink } from "./side-link";

import s from "./side-bar.module.scss";
import { useWebSocket } from "../../hooks/useConnectSocket";

export const SideBar: React.FC = () => {
  const { isLoggedIn, user } = useAuth();
  useWebSocket(user.id);
  return (
    <aside className={s.sidebar}>
      <img src={logo} alt="logo" height={50} width={50} />
      {isLoggedIn ? <SideLink /> : null}

      <CiCloudSun size={27} color="yellow" />
    </aside>
  );
};
