import React from "react";
import Task from "./Task";
// import { TASKS } from "../data";
// import { TASKS } from "../data";

function TaskList( {tasks, deletedItem}) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (<Task key = {index}  deletedItem = {deletedItem} text = {task.text} category ={task.category} />))}
    </div>
  );
}

export default TaskList;
