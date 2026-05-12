import React from "react";

const Title = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-between gap-2 py-5 border-b border-b-gray-300">
      <h1 className="text-2xl  title-color font-bold">{title}</h1>
      <i className={`${icon} title-color text-3xl`}></i>
    </div>
  );
};

export default Title;
