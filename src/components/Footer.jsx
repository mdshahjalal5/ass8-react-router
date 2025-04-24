import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import Brand from "./Brand";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="space-y-4 py-4 max-sm:justify-start flex flex-col max-sm:items-start max-sm:p-2 mt-10">
      <Brand className={"justify-center"} />
      <div className="flex-center">
        <Menu
          className={`flex gap-5 text-gray-600 font-semibold text-lg max-sm:flex-col max-sm:gap-[1px]`}
          isExternal={true}
        />
      </div>
      <hr className="border border-gray-300 w-5/6 my-3 mx-auto mb-7" />

      {/* icons */}

      <FooterLinks />
    </footer>
  );
};

export default Footer;
