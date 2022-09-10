import React from "react";

export default function Box({ value, onClick }) {
  const style = value === "X" ? "box text-danger shadow-danger" : "box text-primary shadow-primary";
  return (
    <>
      <button
        onClick={onClick}
        className={`box ${style} btn btn-primary bg-light fs-2 rounded-4`}
      >
        {value}
      </button>
    </>
  );
}
