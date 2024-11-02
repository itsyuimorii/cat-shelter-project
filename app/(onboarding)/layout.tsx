import React from "react";
import { Navbar } from "@/components/navBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-default-bg h-screen">
      <div className="pt-10">
        {" "}
        <Navbar />
      </div>

      {children}
    </div>
  );
}
