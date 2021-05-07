import React from "react";
import TaskListItem from "../TaskListItem/TaskListItem";

function TaskList({ user, tasks, handleDeleteTask }) {
    const userTasks = tasks.filter( task => {
        if (task){
            return task.userId === user._id
          }else{
             return false
          }})

    const alltasks = userTasks.map((task) => (
      <TaskListItem task={task} handleDeleteTask={handleDeleteTask} />
    ));
    console.log(alltasks);

    return (
      <div>
        <h1> Task List </h1>
        <main>{alltasks}</main>
      </div>
    );
  };
export default TaskList;
