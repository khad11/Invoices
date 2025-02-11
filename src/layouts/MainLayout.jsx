import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "../components";

function MainLayout() {
  return (
    <>
      <div className="flex gap-4 ">
        <SideBar />
        {/* <Navbar /> */}
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default MainLayout;
