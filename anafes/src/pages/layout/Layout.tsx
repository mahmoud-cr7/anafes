import SideBar from "../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";

import "./Layout.css";
const Layout = () => {
  return (
    <div className="layout">

      <Outlet />
      <SideBar />
    </div>
  );
};

export default Layout;
