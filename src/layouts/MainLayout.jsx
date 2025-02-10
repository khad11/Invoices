import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import SideBar from "../components/SideBar";

function MainLayout() {
  return (
    <>
      <SideBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
