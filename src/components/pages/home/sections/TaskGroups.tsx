import { tasks } from "@/constants/task";
import { Progress } from "antd";
import React from "react";

const TaskGroups = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-5 justify-items-start">
        <div className="flex items-center gap-x-2">
          <h1 className="text-black font-bold text-[30px]">Task Group</h1>
          <span className="h-5 w-5 rounded-full flex items-center justify-center bg-indigo-700/20  text-indigo-700">
            6
          </span>
        </div>
        <ul className="flex flex-col gap-y-5 items-center gap-x-5 ">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="rounded-[20px] p-5 text-black flex  items-center justify-between w-full   relative bg-indigo-50"
            >
              <div className="flex  items-center gap-x-5">
                <div className="p-1 rounded-lg bg-pink-400  ">
                  <task.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-neutral-400 font-bold">{task.type}</p>
                  <h2 className="text-xl ">{task.title}</h2>
                </div>
              </div>

              <Progress
                type="dashboard"
                size={50}
                percent={75}
                strokeColor="blue"
                strokeWidth={10}
                className="text-white"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TaskGroups;
