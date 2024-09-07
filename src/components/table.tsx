"use client";

import React from "react";

interface Info {
  id: number;
  name: string;
  BG: string;
  contactNo: string;
  LDD: number;
}

interface TableProps {
  array: Info[];
}

export default function Table({ array }: TableProps) {
  const header = {
    id: "Serial",
    name: "Name",
    BG: "Blood Group",
    contactNo: "Contact No",
    LDD: "Illegible"
  };

  const fourMonthsInMillis = 10512000000;
  const today = Date.now();

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            {Object.values(header).map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {array.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.BG}</td>
              <td>{row.contactNo}</td>
              <td>{today - row.LDD > fourMonthsInMillis? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
