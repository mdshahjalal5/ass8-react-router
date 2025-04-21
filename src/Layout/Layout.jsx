import { Outlet } from "react-router-dom";
import EnterAnimation from "../animation/EnterAnimation";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <EnterAnimation className="sticky z-[1000] top-4">
        <Nav />
      </EnterAnimation>

      <main className="min-h-[170vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
