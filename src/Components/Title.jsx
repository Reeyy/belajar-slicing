import React from "react";
export default function TitleDesc({ title, desc }) {
  return (
    <div className="flex flex-col  py-12 mt-20 mb-14">
      <div className="font-medium text-4xl mx-auto py-5">{title}</div>
      <div className="mx-auto font-normal text-base">{desc}</div>
    </div>
  );
}
