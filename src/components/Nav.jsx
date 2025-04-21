import { logo } from "../assets";
import Button from "./Button";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import Menu from "./Menu";

const Nav = () => {
  const [open, setOpen] = useState(false);
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

        {/* desktop device menu */}
        <Menu
          className={`max-sm:hidden flex gap-5 text-gray-600 font-semibold text-lg`}
        />

        <div className="relative">
          <div className="max-sm:hidden">
            <Button label={"Emergency"} />
          </div>
          <div onClick={() => setOpen(!open)} className="sm:hidden border">
            <button>
              {/* <AlignJustify /> */}
              {open ? (
                <span className="text-2xl font-semibold p-1">X</span>
              ) : (
                <AlignJustify />
              )}
            </button>
          </div>
          <div
            className={`bg-gray-300  rounded-lg absolute -left-[124px] sm:hidden ${open ? "" : "hidden"}`}
          >
            {/* mobile device menu */}
            <Menu className="p-4  flex flex-col gap-1 text-gray-600 font-semibold text-lg" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
