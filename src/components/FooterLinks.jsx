import { Facebook, Instagram, Link, Youtube } from "lucide-react";

const FooterLinks = () => {
  return (
    <div className="flex gap-7 justify-center">
      <Link className="border p-2 rounded-full bg-blue-300">
        <Facebook />
      </Link>
      <Link className="border p-2 rounded-full bg-blue-300">
        <Youtube />
      </Link>
      <Link className="border p-2 rounded-full bg-blue-300">
        <Instagram />
      </Link>
      <Link className="border p-2 rounded-full bg-blue-300">
        <Twitter />
      </Link>

      <Link className="border p-2 rounded-full bg-blue-300">
        <Mail />
      </Link>
    </div>
  );
};

export default FooterLinks;
