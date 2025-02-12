import InvoicesItem from "../components/InvoicesItem";
import Header from "../components/Header";
import { useState } from "react";
import NotFounded from "../components/NotFounded";

function Home() {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <div className="align-elements my-auto flex flex-col mt-[72px] ">
      <Header setFilteredData={setFilteredData} />
      {filteredData.length > 0 ? (
        <InvoicesItem filteredData={filteredData} />
      ) : (
        <NotFounded />
      )}
    </div>
  );
}

export default Home;
