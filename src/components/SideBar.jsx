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
    <div className="flex flex-col justify-between pb-5 bg-slate-800 rounded-tr-3xl rounded-br-3xl ">
      <div className="w-full">
        <img src="public/logo-m.png" alt="logo" />
      </div>
      <div className="flex flex-col gap-2 items-center ">
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
        <span className="h-[1px] w-[100px] block bg-amber-100 my-5"></span>
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
