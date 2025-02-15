import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "../components";

function MainLayout() {
  return (
    <>
      <div className="flex gap-4 all-bg  h-[100vh]   ">
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
