import React from "react";
import { useState } from "react";

const Tasks = ({ data, setData }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: data.length + 1,
        task: task,
        day: day.split("T")[0],
        date: day.split("T")[1],
        clicked: true,
      },
    ]);
    console.log(data);
  };
  return (
    <div className="m-auto">
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Task</p>
        <input
          className="form-control "
          type="text"
          value={task}
          placeholder="Add task"
          onChange={(e) => setTask(e.target.value)}
          required
        ></input>
        <p>Day & Time</p>
        <input
          value={day}
          className="form-control"
          type="datetime-local"
          required
          onChange={(e) => setDay(e.target.value)}
        ></input>
        <input
          className="input-btn rounded-2"
          type="submit"
          value="Save Task"
          placeholder="Add day & Time"
        ></input>
      </form>
    { (data.length< 1) && <p className="text-center">No task to show...</p>}
    </div>
  );
};

export default Tasks;
