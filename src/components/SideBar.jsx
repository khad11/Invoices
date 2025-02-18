import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme", "silentforest");
};
function SideBar() {
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const toggleTheme = () => {
    const newTheme = theme == "silentforest" ? "magicalbro" : "silentforest";
    setTheme(newTheme);
  };

  // theme uchun useeffect
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className=" flex justify-between h-[103px] w-full bg-slate-800 md:h-screen md:w-[103px] md:rounded-br-3xl md:rounded-tr-3xl  md:flex md:flex-col lg:justify-between">
      <div className="w-full">
        <img src="public/logo-m.png" alt="logo" />
      </div>
      <div className="flex md:flex-col md:gap-2 items-center gap-5 sm:pr-4 ">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onClick={toggleTheme}
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <TiWeatherSunny className="swap-on h-[20px] w-[20px] fill-current  text-amber-50" />

          {/* moon icon */}
          <IoMoonOutline className=" swap-off h-[20px] w-[20px] fill-current text-amber-50" />
        </label>
        <span className="md:h-[1px] md:w-[100px] h-[102px]  w-[1px] block bg-amber-100 my-5"></span>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-[40px] h-[40px] rounded-full">
            <img alt="Tailwind CSS Navbar component" src="public/Oval.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
