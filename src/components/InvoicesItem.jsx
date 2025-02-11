// usefewtch
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function InvoicesItem() {
  const apiUrl = import.meta.env.VITE_API_KEY;
  const [url] = useState(apiUrl);
  const { data } = useFetch(url);
  console.log(data);
  return (
    <div>
      {data &&
        data.map((info) => {
          return (
            <div
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
                <div
                  className={`
          px-6 py-2 rounded-md capitalize flex items-center gap-2
          ${
            info.status === "pending"
              ? "bg-[#FF8F001A] text-[#FF8F00]"
              : "pending"
          }
          ${info.status === "paid" ? "bg-[#33D69F1A] text-[#33D69F]" : ""}
          ${info.status === "draft" ? "bg-[#373B531A] " : ""}
        `}
                >
                  <span
                    className={`
            w-2 h-2 rounded-full
            ${info.status === "pending" ? "bg-[#FF8F00]" : ""}
            ${info.status === "paid" ? "bg-[#33D69F]" : ""}
            ${info.status === "draft" ? "bg-[#ffff]" : ""}
          `}
                  ></span>
                  {info.status}
                </div>
                {/* <ChevronRight className="h-4 w-4 text-[#7C5DFA]" /> */}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default InvoicesItem;
