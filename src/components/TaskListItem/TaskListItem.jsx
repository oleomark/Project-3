import React from "react";
import { Link } from "react-router-dom";

function TaskListItem({ task, handleDeleteTask }) {
  return (
    <div>
      <div>
        <h3>{task.title}</h3>
        <Link
          to={{
            pathname: "/details",
            state: { task },
          }}
        >
          DETAILS
        </Link>
        &nbsp; | &nbsp;
        <Link
          to={{
            pathname: "/edit",
            state: { task },
          }}
        >
          EDIT
        </Link>
        &nbsp; | &nbsp;
        <button
          onClick={() => handleDeleteTask(task._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TaskListItem;
