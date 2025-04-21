import { NavLink } from "react-router-dom";
import { links } from "../constant";
import { logo } from "../assets";
import Button from "./Button";

const Nav = () => {
  return (
    <header className="p-4 ">
      <nav className="flex-between border p-2 rounded-xl ">
        <div className="flex-cente flex items-center gap-2">
          <img src={logo} width={35} />
          <h1 className=" max-sm:text-xl text-3xl font-semibold">
            <span className="font-courgette text-skyy">Medical</span>
            <span className="font-kaushan text-orangy">Hub</span>
          </h1>
        </div>
        <div className="">
          <ul className="max-sm:hidden flex gap-5 text-gray-600 font-semibold text-lg">
            {links.map((link) => (
              <NavLink key={link.label} to={link.path}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="max-sm:hidden">
          <Button
            label={"Emergency"}
            className={
              "border px-5 py-3 rounded-[9999px] bg-blue-600 text-white font-semibold"
            }
          />
        </div>
        <div></div>
      </nav>
    </header>
  );
};

export default Nav;
