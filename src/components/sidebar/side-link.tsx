
import { CustomNavLink } from "./custum-nav-link";
import { MENU } from "./sidebar.data";

export const SideLink = () => {
  

 

  return (
    <div>
      {MENU.map((item, index) => (
        <CustomNavLink to={item.url} key={index}>
          <item.icons size={27} />
        </CustomNavLink>
      ))}
    </div>
  );
};
