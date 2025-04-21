import { NavLink } from "react-router-dom";
import { links } from "../constant";

const Menu = ({ className }) => {
  return (
    <ul className={className}>
      {links.map((link) => (
        <NavLink key={link.label} to={link.path}>
          {link.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default Menu;
