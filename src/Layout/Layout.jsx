import { Outlet } from "react-router-dom";
import { Nav, Footer } from "../components/Index";
import EnterAnimation from "../animation/EnterAnimation";

const Layout = () => {
  return (
    <>
      <EnterAnimation className="sticky z-[1000] top-[1px]">
        <Nav />
      </EnterAnimation>

      <main className="min-h-[60vh] max-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

// 28 date xm
