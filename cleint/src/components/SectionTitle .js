import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex gap-10 items-center ">
      <h1 className="text-2xl text-tertiary font-semibold">{title}</h1>
      <div className=" w-60 h-[3px] bg-tertiary"></div>
    </div>
  );
}

export default SectionTitle;
