import React from "react";
import AddTask from "./AddTask";
import List from "./Header.jsx";

const Home = () => {
  return (
    <div className="container">
      <h3 className="text-center">Task Tracker</h3>
      <button type="submit" className="text-center m-auto p-1 rounded-1 d-flex border border-none text-light ">Show and task Bar</button>
      <p className="text-center ">No tasks to show...</p>
      <List />
      <AddTask />
    </div>
  );
};

export default Home;
