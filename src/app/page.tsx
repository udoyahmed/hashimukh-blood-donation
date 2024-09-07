"use client";

import React, { useState } from "react";
import Table from "@/components/table";
import BloodGroupForm from "@/components/query";
import info from "../db/data";

export default function Home() {
  const [data, setData] = useState(info);

  return (
    <div>
      <BloodGroupForm data={info} setData={setData} />
      <Table array={data} />
    </div>
  );
}
