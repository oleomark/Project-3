import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';

function TaskList({ tasks, handleDeleteTask }) {
    const alltasks = tasks.map(task => 
        <TaskListItem
        task={task}
        handleDeleteTask={handleDeleteTask}
        />
        )
    return (
        <div>
        <h1> Task List </h1>
        <main>{alltasks}</main>    
        </div>
    );
}

export default TaskList;