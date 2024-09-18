import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex gap-10 items-center  ">
      <h1 className="text-2xl text-tertiary font-semibold ml-10">{title}</h1>
      <div className=" w-60 h-[3px] bg-tertiary my-20 "></div>
    </div>
  );
}

export default SectionTitle;
