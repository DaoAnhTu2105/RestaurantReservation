import React from "react";
import { useParams } from "react-router-dom";
import AdminReservation from "./admin";

export default function Table() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <AdminReservation />
      <div style={{ textAlign: "center" }}>{id}</div>;
    </>
  );
}
