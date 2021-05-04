import React from 'react'
import TaskList from '../../components/TaskList/TaskList';
import MyCalendar from '../../components/MyCalendar/MyCalendar';


export default function TaskListPage({ tasks, handleDeleteTask }) {

    return (
        <>
        <MyCalendar />
        <TaskList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        />
        </>
    );
}
