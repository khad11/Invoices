import StatusBadge from "./StatusBadge";

function ProductHeader() {
  return (
    <div className=" align-elements  flex items-center justify-between px-[32px] py-[24px] list-a rounded-lg mb-[24px]">
      <div>status : PENDINNG</div>
      <div className="flex gap-[8px]">
        <button className="btn rounded-3xl  ">Edit</button>
        <button className="btn btn-error rounded-3xl">Delete</button>
        <button className="btn btn-primary rounded-3xl">Mark as Paid</button>
      </div>
    </div>
  );
}

export default ProductHeader;
