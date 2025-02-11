import { IoIosArrowDropdown } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";

function Header({ setFilteredData }) {
  const apiUrl = import.meta.env.VITE_API_KEY;
  const { data } = useFetch(apiUrl);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  useEffect(() => {
    if (!data) return;

    const filtered =
      selectedStatuses.length > 0
        ? data.filter((d) => selectedStatuses.includes(d.status))
        : data;

    setFilteredData(filtered);
  }, [selectedStatuses, data, setFilteredData]);

  if (!data) return <p>Loading...</p>;

  // Unique statuslarni olish
  const uniqueStatuses = [...new Set(data.map((item) => item.status))];

  const handleFilterChange = (status) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  return (
    <div className="flex justify-between items-center mb-16">
      <div>
        <h1 className="text-4xl font-bold mb-2">Invoices</h1>
        <p className="text-gray-500">There are {data.length} total invoices</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="dropdown mr-5">
          <div tabIndex={0} className="flex items-center m-1">
            <h1>Filter by status</h1>
            <IoIosArrowDropdown className="ml-3" />
          </div>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            {uniqueStatuses.map((status, index) => (
              <li key={index}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedStatuses.includes(status)}
                    onChange={() => handleFilterChange(status)}
                    className="checkbox"
                  />
                  {status}
                </label>
              </li>
            ))}
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
