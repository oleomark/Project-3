import React from 'react';
import TaskList from '../../components/TaskList/TaskList';
import MyCalendar from '../../components/MyCalendar/MyCalendar';



export default function TaskListPage({ date, setDate, tasks, setTasks, handleDeleteTask }) {
    return (
        <>
        <MyCalendar 
        setTasks={setTasks}
        date={date}
        setDate={setDate}
        />
        <TaskList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        />
        </>
    );
}
