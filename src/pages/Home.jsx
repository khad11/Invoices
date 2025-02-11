import InvoicesItem from "../components/InvoicesItem";
import Header from "../components/Header";
import { useState } from "react";

function Home() {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <div className="align-elements my-auto flex flex-col mt-[72px] ">
      <Header setFilteredData={setFilteredData} />
      <InvoicesItem filteredData={filteredData} />
    </div>
  );
}

export default Home;
