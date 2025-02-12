import React from "react";
import ProductHeader from "../components/ProductHeader";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function Product() {
  const { data } = useFetch();
  const { id } = useParams();

  if (!data) {
    return <p>Loading...</p>;
  }

  // productga tenglab olyapman id ga mos bolgan malumotni !!
  const product = data.find((fd) => fd.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <div className="align-elements  mt-[64px] w-full">
        <Link
          to="/"
          className="flex gap-[10px] items-center mb-[32px] font-bold hover:underline"
        >
          <IoIosArrowBack /> Go back
        </Link>

        <ProductHeader />

        <div className=" w-full list-a ">
          <div className=" rounded-lg p-8 ">
            <div className="grid grid-cols-2 gap-8 mb-12">
              {/* Header */}
              <div>
                <h1 className="text-2xl font-bold ">{product.id}</h1>
                <p className="">{product.description}</p>
              </div>
              <div className="text-right">
                <p>{product.senderAddress.street}</p>
                <p>{product.senderAddress.city}</p>
                <p>{product.senderAddress.postCode}</p>
                <p>{product.senderAddress.country}</p>
              </div>
            </div>

            {/* Dates and Client Info */}
            <div className="grid grid-cols-3  mb-12">
              <div>
                <h2 className="text-c">Invoice Date</h2>
                <p className="text-xl font-bold ">{product.paymentDue}</p>
              </div>
              <div>
                <h2 className=" mb-2 text-c">Bill To</h2>

                <p className="text-xl font-bold mb-2 ">{product.clientName}</p>
                <div className="text-c">
                  <p>{product.clientAddress.street}</p>
                  <p>{product.clientAddress.city}</p>
                  <p>{product.clientAddress.postCode}</p>
                  <p>{product.clientAddress.country}</p>
                </div>
              </div>
              <div className="">
                <h2 className="text-c mb-2">Sent to</h2>
                <p className="text-xl font-bold">{product.clientEmail}</p>
              </div>
            </div>

            {/* Invoice Items */}
            <div className="rounded-lg p-8 mb-8 ">
              <table className="w-full ">
                <thead>
                  <tr className="text-c">
                    <th className="text-left">Item Name</th>
                    <th className="text-center">QTY.</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {product.items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="py-4 font-bold">{item.name}</td>
                        <td className="text-center text-c">{item.quantity}</td>
                        <td className="text-right text-c">{item.price}</td>
                        <td className="text-right font-bold">{item.total}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Total Amount */}
            <div className="bg-gray-900 text-white rounded-lg p-8 flex justify-between items-center">
              <span className="text-lg">Amount Due</span>
              <span className="text-3xl font-bold">{product.total}</span>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Product;
