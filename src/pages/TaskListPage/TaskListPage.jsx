import React from 'react';
import TaskList from '../../components/TaskList/TaskList';
import MyCalendar from '../../components/MyCalendar/MyCalendar';


export default function TaskListPage({ user, date, setDate, tasks, setTasks, handleDeleteTask, defaultState }) {
    return (
        <>
        <MyCalendar 
        setTasks={setTasks}
        date={date}
        setDate={setDate}
        tasks={tasks}
        defaultState={defaultState}

        />
        <TaskList
        user={user}
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        />
        </>
    );
}
