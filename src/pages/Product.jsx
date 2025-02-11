import React from "react";
import ProductHeader from "../components/ProductHeader";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function Product() {
  return (
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
              <h1 className="text-2xl font-bold ">#XM9141</h1>
              <p className="">Graphic Design</p>
            </div>
            <div className="text-right">
              <p>19 Union Terrace</p>
              <p>London</p>
              <p>E1 3EZ</p>
              <p>United Kingdom</p>
            </div>
          </div>

          {/* Dates and Client Info */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="text-c">Invoice Date</h2>
              <p className="text-xl font-bold ">21 Aug 2021</p>
            </div>
            <div>
              <h2 className=" mb-2 text-c">Bill To</h2>
              <p className="text-xl font-bold mb-2 ">Alex Grim</p>
              <div className="text-c">
                <p>84 Church Way</p>
                <p>Bradford</p>
                <p>BD1 9PB</p>
                <p>United Kingdom</p>
              </div>
            </div>
            <div>
              <h2 className="text-c mb-2">Sent to</h2>
              <p className="text-xl font-bold">alexgrim@mail.com</p>
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
                <tr>
                  <td className="py-4 font-bold">Banner Design</td>
                  <td className="text-center text-c">1</td>
                  <td className="text-right text-c">£ 156.00</td>
                  <td className="text-right font-bold">£ 156.00</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold">Email Design</td>
                  <td className="text-center text-c">2</td>
                  <td className="text-right text-c">£ 200.00</td>
                  <td className="text-right font-bold">£ 400.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Total Amount */}
          <div className="bg-gray-900 text-white rounded-lg p-8 flex justify-between items-center">
            <span className="text-lg">Amount Due</span>
            <span className="text-3xl font-bold">£ 556.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
