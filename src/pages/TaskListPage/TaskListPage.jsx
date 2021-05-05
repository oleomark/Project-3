import React from 'react'
import TaskList from '../../components/TaskList/TaskList';
import MyCalendar from '../../components/MyCalendar/MyCalendar';


export default function TaskListPage({ tasks, setTasks, handleDeleteTask }) {

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
