import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';

export default function TaskList({ tasks }) {
    const alltasks = tasks.map(task => 
        <TaskListItem
        task={task}
        />
        )

    return (
        <div>
        <h1> Task List </h1>
        <main>{alltasks}</main>    
        </div>
    );
}
