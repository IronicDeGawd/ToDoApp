/* eslint-disable react/prop-types */
// import React from "react";
import { useState } from "react";

import ShowMore from "./ShowMore";
import DeleteButton from "./DeleteButton";
import MarkDone from "./MarkDone";
import MarkNotDone from "./MarkNotDone";

function TaskCard({ tasks, index, handleMarkDone, handleDeleteTask }) {
  const [isFocus, setFocus] = useState(false);

  return (
    <div
      id={index}
      tabIndex={0}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className={`flex flex-col w-full p-3 border-1 ${
        tasks.markdone
          ? "bg-slate-300 hover:bg-slate-200"
          : "bg-white hover:bg-gray-100"
      } border-slate-600 rounded-2xl shadow-lg transition-all duration-300`}
    >
      <div>
        <div className="flex justify-between">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleMarkDone(index);
            }}
            className="transition-all duration-300"
          >
            {tasks.markdone ? <MarkNotDone /> : <MarkDone />}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleDeleteTask(index);
            }}
            className={`py-2 px-2 mb-2 items-center text-xs sm:text-sm sm:font-medium rounded-lg ${
              tasks.markdone ? "text-white transition-all duration-300" : ""
            }`}
          >
            <DeleteButton />
          </button>
        </div>
      </div>
      <h5
        className={`text-base sm:text-lg break-words mb-2 font-bold tracking-tight ${
          tasks.markdone ? "line-through text-gray-700" : "text-gray-900"
        }`}
      >
        {tasks?.title || "Task Title"}
      </h5>

      {isFocus ? (
        <>
          <p
            className={`mb-2 text-sm sm:text-base text-wrap break-words w-full font-semibold ${
              tasks.markdone ? "line-through text-gray-500" : "text-gray-700"
            }`}
          >
            {tasks?.details.length > 60 ? (
              <ShowMore tasksDetail={tasks} />
            ) : (
              tasks.details
            )}
          </p>
        </>
      ) : (
        ""
      )}
      <div className=" font-mono text-xms sm:text-sm  grid grid-cols-1 gap-1 text-gray-500">
        <span>Created: {tasks.time}</span>
        <span>Deadline: {tasks?.deadline}</span>
      </div>
    </div>
  );
}

export default TaskCard;
