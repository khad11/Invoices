import InvoicesItem from "../components/InvoicesItem";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import NotFounded from "../components/NotFounded";
import { getAllData } from "../hooks/useFetch";

function Home() {
  const [filteredData, setFilteredData] = useState([]);

  // const [filteredData, setFilteredData] = useState([]);
  return (
    <div className="align-elements my-auto flex flex-col pt-20  h-screen ">
      <Header setFilteredData={setFilteredData} />
      {filteredData?.length > 0 ? (
        <InvoicesItem filteredData={filteredData} />
      ) : (
        <NotFounded />
      )}
    </div>
  );
}

export default Home;
