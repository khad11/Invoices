import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "../components";

function MainLayout() {
  return (
    <>
      <div className=" all-bg  h-[100vh]  md:flex ">
        <SideBar />
        {/* <Navbar /> */}
        <main className="w-full ">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default MainLayout;
