import { NavLink, useLocation } from "react-router-dom";
import s from "./side-bar.module.scss";

interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={`${s.navLink} ${isActive ? s.activeNavLink : ""}`}
    >
      {children}
    </NavLink>
  );
};
