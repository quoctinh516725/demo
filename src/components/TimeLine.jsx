import React from "react";

const TimeLine = ({ pastTime, presentTime, title, content }) => {
  return (
    <div className="max-w-[500px] text-white">
      <div className="flex items-center gap-2">
        <p className="w-2 h-2 border-2 border-blue-500 rounded-full"></p>
        <p>{pastTime}</p>
      </div>
      <div className="flex">
        <div className="w-1 h-[100px] bg-blue-500 rounded-full ml-[2px]"></div>
        <div className=" p-3 ml-5">
          <p className=" font-bold">{title}</p>
          <p className="mt-2">{content}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="w-2 h-2 border-2 border-blue-500 rounded-full"></p>
        <p>{presentTime}</p>
      </div>
    </div>
  );
};

export default TimeLine;
