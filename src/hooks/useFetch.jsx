import { useEffect, useState } from "react";
import { queryGenerator } from "../utils/query-generator";

export async function getAllData() {
  const req = await fetch("http://localhost:3000/data");
  if (req.status === 200) {
    return await req.json();
  } else {
    throw new Error("Xatolik yuzaga keldi ! ");
  }
}

export async function getOneData(id) {
  const req = await fetch(`http://localhost:3000/data/${id}`);
  if (req.status === 200) {
    return await req.json();
  } else {
    throw new Error("Xatolik yuzaga keldi ! ");
  }
}

export async function getFilterData(filter) {
  const req = await fetch(
    `http://localhost:3000/data/${
      queryGenerator(filter) !== "" ? `?status=${queryGenerator(filter)}` : ""
    }`
  );
  if (req.status === 200) {
    return await req.json();
  } else {
    throw new Error("Xatolik yuzaga keldi ! ");
  }
}
