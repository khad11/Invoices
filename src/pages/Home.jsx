import InvoicesItem from "../components/InvoicesItem";
import Header from "../components/Header";

function Home() {
  return (
    <div className="align-elements my-auto flex flex-col mt-[72px] ">
      <Header />
      <InvoicesItem />
    </div>
  );
}

export default Home;
