import { IoIosArrowDropdown } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

function Header() {
  return (
    <div className="flex justify-between items-center mb-16">
      <div>
        <h1 className="text-4xl font-bold mb-2">Invoices</h1>
        <p className="text-gray-500">There are 7 total invoices</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="dropdown mr-5">
          <div tabIndex={0} role="" className="flex items-center m-1">
            <h1>Filter by status</h1>
            <IoIosArrowDropdown className="ml-3" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="btn bg-blue-600 text-slate-100 flex gap-5 rounded-3xl w-[150px] ">
          <CiCirclePlus className="w-8 h-8 " />

          <span className="text-[12px]">New Invoice</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
