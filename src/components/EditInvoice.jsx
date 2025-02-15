import React, { useEffect, useRef, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import FormInput from "./FormInput";
import { getOneData } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

// toast

function EditInvoice() {
  const { id } = useParams();
  const drawerRef = useRef(null);
  const formRef = useRef(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const updateInvoice = async (e) => {
    e.preventDefault();

    // const itemsList = Array.from(
    //   e.target.querySelectorAll('input[name="name"]')
    // ).map((input, index) => ({
    //   name: input.value,
    //   quantity: e.target.querySelectorAll('input[name="quantity"]')[index]
    //     .value,
    //   price: e.target.querySelectorAll('input[name="price"]')[index].value,
    //   total: e.target.querySelectorAll('input[name="total"]')[index].value,
    // }));

    // console.log(e.target.item.name.value);
    // console.log(e.target.city.value);

    const updatedData = {
      clientName: e.target.clientName.value,
      clientEmail: e.target.clientEmail.value,
      senderAddress: {
        street: e.target.senderStreet.value,
        city: e.target.senderCity.value,
        postCode: e.target.senderPostCode.value,
        country: e.target.senderCountry.value,
      },
      clientAddress: {
        street: e.target.street.value,
        city: e.target.city.value,
        postCode: e.target.postCode.value,
        country: e.target.country.value,
      },
      createdAt: e.target.invoiceDate.value,
      paymentTerms: e.target.paymentTerms.value,
      description: e.target.projectDescription.value,
      items,
    };

    try {
      const response = await fetch(`http://localhost:3000/data/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Ma'lumotni yangilashda xatolik!");
      }

      toast.success("Invoice muvaffaqiyatli yangilandi!");
      drawerRef.current.checked = false;
    } catch (error) {
      console.error(error);
      toast.error("Xatolik yuz berdi!");
    }
  };

  useEffect(() => {
    setLoading(true);
    getOneData(id)
      .then((res) => {
        setData(res);
        setItems(res.items);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  // add new item button
  const addNewItem = () => {
    setItems([...items, { name: "", qty: 1, price: 0 }]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <div className="drawer">
        <input
          ref={drawerRef}
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn  rounded-full flex   drawer-button"
          >
            <p> Edit</p>
          </label>
        </div>
        <form
          ref={formRef}
          className="drawer-side ml-[100px] "
          onSubmit={updateInvoice}
        >
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div>
            <ul className=" list-a text-base-content h-full w-[720px] ">
              {/* Sidebar content here */}
              <div className="max-w-2xl  list-a p-6 rounded-lg  ">
                <h1 className="text-2xl font-bold mb-6">New Invoice</h1>

                {/* Bill From */}
                <h2 className="text-purple-600 font-semibold mb-2">
                  Bill From
                </h2>
                <FormInput
                  defaultValue={data?.senderAddress?.street}
                  name="senderStreet"
                  type="text"
                  mainName="Street Address"
                />

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <FormInput
                    defaultValue={data?.senderAddress?.city}
                    name="senderCity"
                    type="text"
                    placaholder="London"
                    mainName="City"
                  />

                  <FormInput
                    defaultValue={data?.senderAddress?.postCode}
                    name="senderPostCode"
                    type="text"
                    placaholder="E1 3EZ"
                    mainName="Post Code"
                  />
                  <FormInput
                    defaultValue={data?.senderAddress?.country}
                    name="senderCountry"
                    type="text"
                    placaholder="United Kingdom"
                    mainName="Country"
                  />
                </div>

                {/* Bill To */}
                <h2 className="text-purple-600 font-semibold mt-6 mb-2">
                  Bill To
                </h2>
                <FormInput
                  defaultValue={data?.clientName}
                  name="clientName"
                  type="text"
                  placaholder="Alex Grim"
                  mainName="Client’s Name"
                />
                <FormInput
                  defaultValue={data?.clientEmail}
                  name="clientEmail"
                  type="email"
                  placaholder="alexgrim@mail.com"
                  mainName="Clients Email"
                />
                <FormInput
                  defaultValue={data?.clientAddress?.street}
                  name="street"
                  type="text"
                  placaholder="84 Church Way"
                  mainName="Street Address"
                />

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <FormInput
                    defaultValue={data?.clientAddress?.city}
                    name="city"
                    type="text"
                    placaholder="Bradford"
                    mainName="City"
                  />
                  <FormInput
                    defaultValue={data?.clientAddress?.postCode}
                    name="postCode"
                    type="text"
                    placaholder="BD1 9PB"
                    mainName="Post Code"
                  />
                  <FormInput
                    defaultValue={data?.clientAddress?.country}
                    name="country"
                    type="text"
                    placaholder="United Kingdom"
                    mainName="Country"
                  />
                </div>

                {/* Invoice Date & Payment Terms */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <FormInput
                    defaultValue={data?.createdAt}
                    name="invoiceDate"
                    type="date"
                    mainName="Invoice Date"
                  />
                  <FormInput
                    defaultValue={data?.paymentTerms}
                    name="paymentTerms"
                    type="text"
                    placaholder="Net 30 Days"
                    mainName="Payment Terms"
                  />
                </div>

                <FormInput
                  defaultValue={data?.description}
                  name="projectDescription"
                  type="text"
                  placaholder="Graphic Design"
                  mainName="Project Description"
                />

                {/* Item List */}
                <h2 className="text-gray-600 font-semibold mt-6 mb-2">
                  Item List
                </h2>

                {items.length === 0 ? (
                  <p className="text-gray-500 text-center">
                    Item qo‘shish uchun "Add New Item" tugmasini bosing
                  </p>
                ) : (
                  items.map((item, index) => (
                    <div key={index} className="flex  gap-4">
                      <FormInput
                        defaultValue={item?.name}
                        name="name"
                        type="text"
                        placeholder="Banner Design"
                        mainName="Item Name"
                      />
                      <FormInput
                        defaultValue={item?.quantity}
                        name="quantity"
                        type="number"
                        placeholder="1"
                        mainName="Qty."
                      />
                      <FormInput
                        defaultValue={item?.price}
                        name="price"
                        type="number"
                        placeholder="156.00"
                        mainName="Price"
                      />
                      <FormInput
                        defaultValue={item.total}
                        name="total"
                        type="number"
                        placeholder="156.00"
                        mainName="total"
                      />

                      {/* <h3 className="mb-1">Total</h3> */}

                      {/* <span className="px-3 py-2 flex justify-between items-center text-gray-400">
                        {}
                      </span> */}
                      <button>
                        <MdOutlineDelete
                          className="text-3xl cursor-pointer mt-7 ml-2"
                          onClick={() => removeItem(index)}
                        />
                      </button>
                    </div>
                  ))
                )}
                <button
                  className="w-full btn-blue-bg py-2 mt-4 rounded-lg"
                  type="button"
                  onClick={addNewItem}
                >
                  + Add New Item
                </button>
              </div>
              <div className=" sticky bottom-0  btn-button left-0 p-8  w-full ">
                <div className="flex gap-2 justify-end  ">
                  <button
                    className="btn-bg py-2 px-6 rounded-lg"
                    type="button"
                    onClick={() => (drawerRef.current.checked = false)}
                  >
                    cancel
                  </button>
                  <button
                    className="bg-purple-600 text-white py-2 px-6 rounded-lg"
                    type="submit"
                    data-status="pending"
                  >
                    Save Change
                  </button>
                </div>
              </div>
            </ul>
            {/* Buttons */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditInvoice;
