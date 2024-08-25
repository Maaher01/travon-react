import Navbar from "../shared/navbar/navbar";
import FooterArea from "../shared/footerArea/footerArea";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <FooterArea />
    </div>
  );
};

export default Layout;
