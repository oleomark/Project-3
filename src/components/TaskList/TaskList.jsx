import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';

function TaskList({ user, tasks, handleDeleteTask }) {
    const userTasks = tasks.filter( task => {
        return task.userId === user._id 
    },
    )
    console.log(tasks)
    console.log(userTasks)
    console.log(user.id)

    const alltasks = userTasks.map(task => 
        <TaskListItem
        task={task}
        handleDeleteTask={handleDeleteTask}
        />
        )
    console.log(alltasks)

    return (
        <div>
        <h1> Task List </h1>
        <main>{alltasks}</main>    
        </div>
    );
}

export default TaskList;