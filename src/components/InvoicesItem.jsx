import { useState } from "react";
import NotFounded from "../components/NotFounded";
import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

function InvoicesItem({ filteredData }) {
  console.log(filteredData);
  const [data, setData] = useState();

  return (
    <div className="h-[600px] overflow-y-auto">
      {!filteredData ? (
        <NotFounded />
      ) : (
        filteredData.map((info) => (
          <Link
            to={`/product/${info.id}`}
            key={info.id}
            className="list-a rounded-lg p-6 flex  mb-4 items-center justify-between  "
          >
            <div className=" flex flex-col md:flex-row items-center gap-5 md:gap-10">
              <span className="font-bold">
                <span className="text-gray-400">#</span>
                <span>{info.id}</span>
              </span>

              <span className="font-normal"> Due {info.paymentDue}</span>

              <span className="text-xl font-bold h-[24px] md:hidden">
                £ {info.total}
              </span>
              <span className="font-medium hidden md:block">
                {info.clientName}
              </span>
            </div>
            <div className=" flex flex-col md:flex-row items-center gap-6 ">
              <span className="text-xl font-bold h-[24px] hidden md:block">
                £ {info.total}
              </span>
              <span className="font-medium md:hidden">{info.clientName}</span>
              <StatusBadge status={info.status} />
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default InvoicesItem;
