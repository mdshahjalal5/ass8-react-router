import { Outlet } from "react-router-dom";
import { Nav, Footer } from "../components/Index";
import EnterAnimation from "../animation/EnterAnimation";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <EnterAnimation className="sticky z-[1000] top-4">
        <Nav />
        <Header />
      </EnterAnimation>

      <main className="min-h-[170vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
