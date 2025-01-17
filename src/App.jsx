// import React from "react";

import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import InputForm from "./components/InputForm";
import useCurrentDate from "./hooks/useCurrentDate";

function App() {
  // const [tasks, setTasks] = useState([]);

  const [tasks, setTasks] = useState(() => {
    // initialize state from local storage
    const storedTasks = localStorage.getItem("taskDetails");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // for validating input field title and deadline
  const [isTitleValid, setTitleValid] = useState(true);
  const [isDeadlineValid, setDeadlineValid] = useState(true);

  const time = useCurrentDate();

  useEffect(() => {
    localStorage.setItem("taskDetails", JSON.stringify(tasks));
  }, [tasks]);

  const handleMarkDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task, index) =>
        index === id ? { ...task, markdone: !task.markdone } : task
      )
    );
  };

  const handleAddTask = (titleRef, detailRef, timeRef) => {
    let title = titleRef.current.value;
    let details = detailRef.current.value;
    let deadline = timeRef?.current.value || 0;
    let timeNow = time[1];
    let currTime = time[0];
    let deadlineTime = Date.parse(deadline);

    // console.log(deadlineTime, currTime, deadline);
    if (title.length <= 0) {
      setTitleValid(false);
    } else if (deadlineTime < currTime) {
      setDeadlineValid(false);
    } else {
      setTasks((prev) => [
        {
          title: title,
          details: details,
          deadline: deadline,
          time: timeNow,
          markdone: false,
        },
        ...prev,
      ]);
      setDeadlineValid(true);
      setTitleValid(true);
      titleRef.current.value = "";
      detailRef.current.value = "";
      timeRef.current.value = "";
    }
  };

  const handleDeleteTask = (index) => {
    console.log(index);
    setTasks(tasks.filter((item, id) => id !== index));
  };

  return (
    <>
      <div className=" bg-gray-100 font-primary font-semibold overflow-x-hidden w-screen items-center justify-start h-screen overflow-y-auto flex flex-col">
        <div
          id="input"
          className="flex flex-col w:3/4 sm:w-2/4 items-center gap-5 my-5"
        >
          <p className="font-bold text-5xl text-gray-800 top-10">To Do</p>

          <InputForm
            handleAddTask={handleAddTask}
            isTitleValid={isTitleValid}
            isDeadlineValid={isDeadlineValid}
            setTitleValid={setTitleValid}
          />
        </div>
        <hr className="border-1 mt-1 mb-3 border-opacity-60 w-4/5 rounded-md shadow-sm shadow-violet-300 border-slate-600" />

        {tasks.length ? (
          <div
            id="task-cards"
            className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center p-2 gap-2"
          >
            {tasks &&
              tasks.map((task, index) => (
                <TaskCard
                  key={index}
                  tasks={task}
                  index={index}
                  handleMarkDone={handleMarkDone}
                  handleDeleteTask={handleDeleteTask}
                />
              ))}
          </div>
        ) : (
          <div>
            <i className="text-gray-500 text-center">No Tasks Added Yet!</i>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
