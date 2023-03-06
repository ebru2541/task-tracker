import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Button from "./Button";
import Tasks from "./Tasks";

const getLocalStorage = () => {
  let data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

const Header = () => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState(getLocalStorage());
 useEffect(() => {
   localStorage.setItem("data", JSON.stringify(data));
 }, [data]);
 


  return (
    <div className="container">
      <h3 className="text-center  title">Task Tracker</h3>
      <Button show={show} setShow={setShow} />
      {show || <p className="text-center ">No tasks to show...</p>}
      {show && <Tasks setData={setData} data={data} />}
      {data.length > 0 && (
        <AddTask setData={setData} show={show} setShow={setShow} data={data} />
      )}
    </div>
  );
};

export default Header;
