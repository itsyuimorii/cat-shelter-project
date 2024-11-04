import React from "react";
import { CatCard } from "@/components/catCard";
import { TopFilter } from "@/components/TopFilter";

// export const index = () => {}

export default function Page() {
  return (
    <div>
      <TopFilter />
      <CatCard />
    </div>
  );
}
