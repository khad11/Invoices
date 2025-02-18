import { IoIosArrowDropdown } from "react-icons/io";
import { getAllData } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import CreateInvoie from "./CreateInvoie";
console.log(2);

function Header({ setFilteredData }) {
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    getAllData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filtered =
    selectedStatuses.length > 0
      ? data.filter((d) => selectedStatuses.includes(d.status))
      : data;

  useEffect(() => {
    if (!data) return;
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
        <h1 className=" text-2xl md:text-4xl font-bold mb-2">Invoices</h1>
        <p className="text-gray-500 hidden md:block">
          There are {filtered?.length} total invoices
        </p>
        <p className="text-gray-500  md:hidden">{filtered?.length} invoices</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="dropdown mr-5">
          <div tabIndex={0} className="flex items-center m-1">
            <h1 className="flex gap-2 items-center">
              Filter <span className="hidden md:block">by status</span>
            </h1>
            <IoIosArrowDropdown className="ml-3" />
          </div>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            {uniqueStatuses.map((status, index) => (
              <li key={index}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handleFilterChange(status)}
                    checked={selectedStatuses.includes(status)}
                  />
                  {status}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <CreateInvoie />
      </div>
    </div>
  );
}

export default Header;
