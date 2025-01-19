import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-white-600">
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
