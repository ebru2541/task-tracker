import React, { useState } from "react";
import AddTask from "./AddTask";
import Button from "./Button";
import Tasks from "./Tasks";

const Header = () => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  return (
    <div className="container">
      <h3 className="text-center">Task Tracker</h3>
      <Button show={show} setShow={setShow} />
      {show || <p className="text-center ">No tasks to show...</p>}
      {show && <Tasks data={data} setData={setData} />}
      {data.length>0 &&  <AddTask data={data} setData={setData} show={show} setShow={setShow} />}
    </div>
  );
};

export default Header;
