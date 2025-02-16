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
    <div className="bg-slate-800 flex justify-between h-[103px] w-full  md:h-screen md:w-[103px] md:rounded-br-3xl md:rounded-tr-3xl  md:flex md:flex-col md:justify-between  ">
      <div className="w-full">
        <img src="public/logo-m.png" alt="logo" />
      </div>
      <div className="flex items-center gap-5 md:flex md:flex-col md:gap-5 md:items-center ">
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
        <span className="h-[103px] w-[1px] md:h-[1px] md:w-[103px] bg-slate-500 "></span>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className=" ">
            <img
              alt="Tailwind CSS Navbar component"
              src="public/Oval.png"
              className="w-10 h-10 mr-5 md:mr-5  md:mb-5 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
