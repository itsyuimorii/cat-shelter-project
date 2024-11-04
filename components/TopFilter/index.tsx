"use client";
import React from "react";
import Image from "next/image";

import { useTopFilter } from "./hooks/useTopFilter";

export const TopFilter = () => {
  const {
    handleLocationChange,
    handleFromDateChange,
    handleToDateChange,
    handleSubmit,
    location,
    fromDate,
    toDate,
  } = useTopFilter();

  return (
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-wrap lg:flex-nowrap lg:space-x-4 border-4 border-black max-w-fit">
      <div className="w-full lg:w-auto lg:flex-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="location"
        >
          Location
        </label>
        <select
          id="location"
          value={location}
          onChange={handleLocationChange}
          className="block w-full px-3 py-2 rounded-md border-black border-4"
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="w-full lg:w-auto lg:flex-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="fromDate"
        >
          Availability From
        </label>
        <select
          id="fromDate"
          value={fromDate}
          onChange={handleFromDateChange}
          className="block w-full px-3 py-2 rounded-md border-black border-4"
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="w-full lg:w-auto lg:flex-2">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="dropdown3"
        >
          Availability To
        </label>
        <select
          id="dropdown3"
          value={toDate}
          onChange={handleToDateChange}
          className="block w-full px-3 py-2 rounded-md border-black border-4"
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="w-full lg:w-auto lg:flex-1 flex items-end mt-4 lg:mt-0">
        <button
          onClick={handleSubmit}
          className="w-full lg:w-auto hover:shadow-pixelShadow border-black border-4 transition hover:-translate-x-1 hover:-translate-y-1 duration-300 ease-in-out flex justify-center"
        >
          <Image src="/cat-paw.svg" height={37} width={37} alt="cog icon" />
        </button>
      </div>
    </div>
  );
};
