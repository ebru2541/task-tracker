import React from "react";
import { useState } from "react";

const AddTask = ({ data, setData, show, setShow }) => {
  const [click, setClick] = useState(true);

  const handleDoubleClick = (id) => {
    setData(
      data.map((item) =>
        item.id === id
          ? {
              ...item,
              clicked: !item.clicked,
            }
          : item
      )
    );
  };
  return (
    <div>
      {data.map((item) => {
        const { task, day, date, clicked, id } = item;
        return (
          <ul key={id}>
            <li className="list" onDoubleClick={() => handleDoubleClick(id)}>
              <div className="d-flex">
                <div className={click ? "d-none" : "script"}></div>
                <div>
                  <p
                    className={
                      clicked
                        ? " fs-4 p-1"
                        : "fs-4 text-decoration-line-through text-danger text-left"
                    }
                  >
                    {task}
                  </p>
                  <p
                    className={
                      click
                        ? "m-1"
                        : "m-1 text-decoration-line-through text-danger"
                    }
                  >
                    {day} / {date}pm
                  </p>
                </div>
              </div>

              <div className="icon ">❌</div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default AddTask;
