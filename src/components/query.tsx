"use client";

import React, { useState } from "react";

interface BloodGroupFormProps {
  data: Array<{ id: number; name: string; BG: string; contactNo: string; LDD: number }>; 
  setData: (filteredData: Array<{ id: number; name: string; BG: string; contactNo: string; LDD: number }>) => void; 
}

export default function BloodGroupForm({ data, setData }: BloodGroupFormProps) {
  const [bloodGroup, setBloodGroup] = useState(""); 

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBloodGroup = e.target.value;
    setBloodGroup(selectedBloodGroup); 

    if (selectedBloodGroup) {
      const filteredData = data.filter((person) => person.BG === selectedBloodGroup);
      setData(filteredData);
    } else {
      setData(data);
    }
  };

  return (
    <div className="form-container">
      <h2>Blood Group Selection</h2>
      <label htmlFor="blood-group">Select Your Blood Group:</label>
      <select
        id="blood-group"
        value={bloodGroup}
        onChange={handleChange}
        required
      >
        <option value="">--Select Blood Group--</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    </div>
  );
}
