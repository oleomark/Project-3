import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';

function TaskList({ user, tasks, handleDeleteTask }) {
    console.log(user)
    console.log(tasks)
    const userTasks = tasks.filter( task => {
        return task.userId === user._id 
    }
        )
    const alltasks = userTasks.map(task => 
        <TaskListItem
        user={user}
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