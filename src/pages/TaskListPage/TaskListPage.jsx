import React, { Component, useRef } from 'react';
import TaskList from '../../components/TaskList/TaskList';
import MyCalendar from '../../components/MyCalendar/MyCalendar';



export default function TaskListPage({ tasks, setTasks, handleDeleteTask }) {
    const inputRef = useRef(null);
    return (
        <>
        <MyCalendar 
        setTasks={setTasks}
        />
        <TaskList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        />
        </>
    );
}
