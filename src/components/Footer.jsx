import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import Brand from "./Brand";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import FooterLinks, { footerLinks } from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="space-y-7 py-4">
      <Brand className={"justify-center"} />
      <div className="flex-center">
        <Menu className={`flex gap-5 text-gray-600 font-semibold text-lg`} />
      </div>
      <hr className="border border-gray-300 w-5/6 my-3 mx-auto" />

      {/*footer  icons */}
      <FooterLinks />
    </footer>
  );
};

export default Footer;
