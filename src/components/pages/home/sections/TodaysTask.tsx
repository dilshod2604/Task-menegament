import React from "react";
import { Progress } from "antd";
import { HiOutlineDotsHorizontal } from "react-icons/hi"
const TodaysTask = () => {
  return (
    <section>
      <div className="flex items-center justify-between p-5  bg-indigo-700 text-white  rounded-[20px] relative">
        <div className="flex flex-col gap-y-5">
          <p className="text-white text-xl font-medium max-w-[200px]">
            {" "}
            Your todays task is almost done!
          </p>
          <button className="flex items-center w-[200px] py-6 h-[50px] text-xl font-bold text-indigo-700 rounded-lg justify-center bg-white  ">
            View task
          </button>
        </div>
        <div>
          <Progress
            type="dashboard"
            percent={75}
            size={70}
            strokeWidth={15}
            strokeColor="white"
            className="text-white"
          />
        </div>
<div className="p-1 rounded-lg absolute right-3 top-3 flex items-center justify-center  bg-white/50 hover:opacity-70 cursor-pointer ">
  <HiOutlineDotsHorizontal  size={20} className="text-black"/>
</div>
      </div>
    </section>
  );
};

export default TodaysTask;
