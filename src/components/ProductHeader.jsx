import { useParams } from "react-router-dom";
import { getOneData } from "../hooks/useFetch";
import StatusBadge from "./StatusBadge";
import DeleteModal from "./AlertModal";
import { useEffect, useState } from "react";
import EditInvoice from "./EditInvoice";

function ProductHeader() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getOneData(id)
      .then((res) => setData(res))
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
        setError("Ma'lumot yuklashda xatolik!");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div>Mahsulot yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!data) {
    return <div>Ma'lumot topilmadi</div>;
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
        status: <StatusBadge status={data?.status} />
      </div>
      <div className="flex gap-[8px]">
        <EditInvoice />
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
        invoiceId={data?.id} // `product.id` o‘rniga `data?.id`
      />
    </div>
  );
}

export default ProductHeader;
