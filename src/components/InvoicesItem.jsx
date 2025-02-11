// usefewtch
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

function InvoicesItem({}) {
  const apiUrl = import.meta.env.VITE_API_KEY;
  const [url] = useState(apiUrl);
  const { data } = useFetch(url);

  return (
    <div>
      {data &&
        data.map((info) => {
          return (
            <Link
              to={`/product/${info.id}`}
              key={info.id}
              className="list-a rounded-lg p-6 flex  mb-4 items-center justify-between"
            >
              <div className="flex items-center gap-10">
                <span className="font-bold">
                  <span className="text-gray-400">#</span>
                  <span className="">{info.id}</span>
                </span>
                <span className="font-normal"> Due {info.paymentDue}</span>
                <span className="font-medium">{info.clientName}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl font-bold h-[24px]">
                  £ {info.total}
                </span>
                <StatusBadge status={info.status} />
                {/* <ChevronRight className="h-4 w-4 text-[#7C5DFA]" /> */}
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default InvoicesItem;
