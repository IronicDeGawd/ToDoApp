/* eslint-disable react/prop-types */
// import React from "react";
import { useRef, useState } from "react";

function InputForm({
  handleAddTask,
  isTitleValid,
  isDeadlineValid,
  setTitleValid,
}) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const titleRef = useRef(null);
  const detailRef = useRef(null);
  const timeRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleValid(true);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col  m-2 gap-1 w-5/6">
        <div className="relative">
          <input
            maxLength={40}
            onChange={(e) => handleTitleChange(e)}
            onKeyUp={(e) => {
              if (e.key == "Enter") detailRef.current.focus();
            }}
            type="text"
            ref={titleRef}
            className="mb-2 w-full pr-16  px-3 py-3 border-1 border-slate-600 rounded-2xl shadow-violet-300 shadow-md"
            placeholder="Enter Task Title"
          ></input>
          <span className="absolute right-3 text-slate-400 translate-y-3 ">
            {title.length}/40
          </span>
          <span className="text-sm font-semibold text-red-500 pl-3">
            {isTitleValid ? "" : "* Title cannot be empty"}
          </span>
        </div>
        <div className="relative">
          <textarea
            maxLength={500}
            onChange={(e) => handleDetailChange(e)}
            ref={detailRef}
            className="w-full pr-16 px-3 py-3 border-1 border-slate-600 rounded-2xl shadow-violet-300 shadow-md"
            placeholder="Enter Task Details"
          ></textarea>
          <span className="absolute right-3 text-slate-400 translate-y-3 ">
            {detail.length}/500
          </span>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row gap-1">
            <input
              type="text"
              ref={timeRef}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Deadline Time"
              className="w-full h-full sm:w-3/5  px-3 py-3 border-1 mb-2 border-slate-600 rounded-2xl shadow-violet-300 shadow-md"
            ></input>
            <button
              onClick={() => {
                handleAddTask(titleRef, detailRef, timeRef);
                setDetail("");
                setTitle("");
              }}
              className="sm:w-2/5  w-full font-semibold px-3 py-3 border-1 bg-slate-600 text-white border-slate-600 rounded-2xl shadow-violet-500 shadow-md transition duration-300 hover:bg-slate-400 hover:text-slate-200"
            >
              Add Task
            </button>
          </div>
          <span className="text-sm font-semibold text-red-500 pl-3">
            {isDeadlineValid
              ? ""
              : "* Deadline cannot be empty or less than current day"}
          </span>
        </div>
      </div>
    </>
  );
}

export default InputForm;
