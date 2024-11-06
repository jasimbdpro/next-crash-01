import { notFound } from "next/navigation";
import React from "react";

export default function BlogPage({ params }) {
  const { id } = params;
  if (id === "3") {
    notFound();
  }
  return (
    <div>
      <h2>BlogPage</h2>
      <p className=" mt-6">The Blog id is: {id} </p>
    </div>
  );
}
