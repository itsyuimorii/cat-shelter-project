import React, { useState } from "react";

export const useTopFilter = () => {
  const [location, setLocation] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  };

  const handleFromDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToDate(e.target.value);
  };

  const handleSubmit = () => {
    // Handle button click event here
    console.log("Dropdown 1:", location);
    console.log("Dropdown 2:", fromDate);
    console.log("Dropdown 3:", toDate);
  };
  return {
    handleLocationChange,
    handleFromDateChange,
    handleToDateChange,
    handleSubmit,
    location,
    fromDate,
    toDate,
  };
};
