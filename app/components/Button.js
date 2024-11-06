"use client";
import React from "react";
export default function Button() {
  return (
    <button
      className="bg-green-500 p-5 rounded"
      onClick={() => console.log("I have clicked here")}
    >
      Click here
    </button>
  );
}
