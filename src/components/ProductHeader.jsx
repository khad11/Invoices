import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import StatusBadge from "./StatusBadge";

function ProductHeader() {
  const { data } = useFetch();
  const { id } = useParams();

  // Agar data hali kelmagan bo'lsa:
  if (!data) {
    return <div>Loading...</div>;
  }

  // data massiv deb hisoblaymiz. URL'dagi id ga mos keladigan mahsulotni topamiz.
  // E'tibor bering: useParams dan kelgan id string bo'ladi, shuning uchun
  // massivdagi item.id ni ham stringga aylantiramiz.
  const product = data.find((item) => String(item.id) === id);

  // Agar mos mahsulot topilmasa:
  if (!product) {
    return <div>Mahsulot topilmadi</div>;
  }

  return (
    <div className="align-elements flex items-center justify-between px-[32px] py-[24px] list-a rounded-lg mb-[24px]">
      {/* Topilgan mahsulotning statusini chiqaramiz */}
      <div className="flex gap-2 items-center">
        status :<StatusBadge status={product.status} />
      </div>
      <div className="flex gap-[8px]">
        <button className="btn rounded-3xl">Edit</button>
        <button className="btn btn-error rounded-3xl">Delete</button>
        <button className="btn btn-primary rounded-3xl">Mark as Paid</button>
      </div>
    </div>
  );
}

export default ProductHeader;
