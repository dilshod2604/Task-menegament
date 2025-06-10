import { tasks } from "@/constants/task";
import { Progress } from "antd";
import React from "react";

const InProgress = () => {      
  return (
    <section>
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-2">
          <h1 className="text-black font-bold text-[30px]">In Progres</h1>
          <span className="h-5 w-5 rounded-full flex items-center justify-center bg-indigo-700/20  text-indigo-700">
          6
          </span>
        </div>
        <ul className="flex items-center gap-x-5 ">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="rounded-[20px] p-6 text-black flex flex-col gap-y-5  relative bg-indigo-50"
            >
              <p className="text-neutral-400 font-bold">{task.type}</p>
              <h2 className="text-xl ">{task.title}</h2>
              <Progress
                type="line"
                percent={75}
                showInfo={false}
                strokeWidth={20}
                strokeColor="blue"
                className="text-white"
              />
              <div className="p-1 rounded-lg bg-pink-400 absolute right-4 top-4 ">
                <task.icon size={20} className="text-white" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InProgress;
