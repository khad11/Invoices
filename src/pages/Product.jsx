import ProductHeader from "../components/ProductHeader";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { getOneData } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null); // Har safar yangi so‘rovda xatoni tozalash
    getOneData(id)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
        setError("Ma'lumot yuklashda xatolik yuz berdi!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!data) {
    return <p>Ma'lumot topilmadi</p>;
  }

  return (
    <>
      <div className="align-elements mt-[64px] w-full">
        <Link
          to="/"
          className="flex gap-[10px] items-center mb-[32px] font-bold hover:underline"
        >
          <IoIosArrowBack /> Go back
        </Link>

        <ProductHeader />

        <div className="w-full list-a h-[450px] overflow-y-auto">
          <div className="rounded-lg p-8">
            <div className="flex flex-col gap-5  lg:grid lg:grid-cols-2 lg:gap-8 lg:mb-12">
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-c">#</span>
                  {data.id}
                </h1>
                <p>{data.description}</p>
              </div>
              <div className="lg:text-right text-left mb-[32px]">
                <p>{data.senderAddress?.street}</p>
                <p>{data.senderAddress?.city}</p>
                <p>{data.senderAddress?.postCode}</p>
                <p>{data.senderAddress?.country}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[35px] lg:grid-cols-3 lg:gap-8lg:mb-12">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-c mb-2">Invoice Date</h2>
                  <p className="text-xl font-bold">{data.createdAt}</p>
                </div>
                <div>
                  <h2 className="text-c mb-2">Payment Due</h2>
                  <p className="text-xl font-bold">{data.paymentTerms} days</p>
                </div>
              </div>
              <div>
                <h2 className="text-c mb-2">Bill To</h2>
                <p className="text-xl font-bold mb-2">{data.clientName}</p>
                <div className="text-c-600">
                  <p>{data.clientAddress.street}</p>
                  <p>{data.clientAddress.city}</p>
                  <p>{data.clientAddress.postCode}</p>
                  <p>{data.clientAddress.country}</p>
                </div>
              </div>
              <div>
                <h2 className="text-c mb-2">Sent to</h2>
                <p className="text-sm font-bold">{data.clientEmail}</p>
              </div>
            </div>

            <div className="rounded-lg p-0 lg:p-8 lg:mb-8">
              <table className="w-full">
                <thead className="hidden md:block">
                  <tr className="text-c">
                    <th className="text-left">Item Name</th>
                    <th className="text-center">QTY.</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data.items?.map((item, index) => (
                    <tr key={index}>
                      <td className="py-4 font-bold">{item.name}</td>
                      <td className="text-left lg:text-center text-c">
                        {item.quantity}
                      </td>
                      <td className=" text-left lg:text-right text-c">
                        {item.price}$
                      </td>

                      <td className="text-right font-bold">{item.total}$</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-900 text-white rounded-lg p-6 lg:p-8 flex justify-between items-center">
              <span className="text-lg">Amount Due</span>
              <span className="text-3xl font-bold">{data.total}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
