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

        <div className="w-full list-a">
          <div className="rounded-lg p-8">
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h1 className="text-2xl font-bold">{data.id}</h1>
                <p>{data.description}</p>
              </div>
              <div className="text-right">
                <p>{data.senderAddress?.street}</p>
                <p>{data.senderAddress?.city}</p>
                <p>{data.senderAddress?.postCode}</p>
                <p>{data.senderAddress?.country}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 mb-12">
              <div>
                <h2 className="text-c">Invoice Date</h2>
                <p className="text-xl font-bold">{data.paymentDue}</p>
              </div>
              <div>
                <h2 className="mb-2 text-c">Bill To</h2>
                <p className="text-xl font-bold mb-2">{data.clientName}</p>
                <div className="text-c">
                  <p>{data.clientAddress?.street}</p>
                  <p>{data.clientAddress?.city}</p>
                  <p>{data.clientAddress?.postCode}</p>
                  <p>{data.clientAddress?.country}</p>
                </div>
              </div>
              <div>
                <h2 className="text-c mb-2">Sent to</h2>
                <p className="text-xl font-bold">{data.clientEmail}</p>
              </div>
            </div>

            <div className="rounded-lg p-8 mb-8">
              <table className="w-full">
                <thead>
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
                      <td className="text-center text-c">{item.quantity}</td>
                      <td className="text-right text-c">{item.price}</td>
                      <td className="text-right font-bold">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-900 text-white rounded-lg p-8 flex justify-between items-center">
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
