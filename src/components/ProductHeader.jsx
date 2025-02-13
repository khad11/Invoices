import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import StatusBadge from "./StatusBadge";
import DeleteModal from "./AlertModal";
import { useState } from "react";

function ProductHeader() {
  const { data } = useFetch();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data) {
    return <div>Loading...</div>;
  }

  const product = data.find((item) => String(item.id) === id);

  if (!product) {
    return <div>Mahsulot topilmadi</div>;
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/data/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Xatolik yuz berdi!");
      }

      window.location.href = "/";
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    <div className="align-elements flex items-center justify-between px-[32px] py-[24px] list-a rounded-lg mb-[24px]">
      <div className="flex gap-2 items-center">
        status :<StatusBadge status={product.status} />
      </div>
      <div className="flex gap-[8px]">
        <button className="btn rounded-3xl">Edit</button>
        <button
          className="btn btn-error rounded-3xl"
          onClick={() => setIsModalOpen(true)}
        >
          Delete
        </button>
        <button className="btn btn-primary rounded-3xl">Mark as Paid</button>
      </div>

      {/* Modal */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          setIsModalOpen(false);
          handleDelete();
        }}
        invoiceId={product.id}
      />
    </div>
  );
}

export default ProductHeader;
