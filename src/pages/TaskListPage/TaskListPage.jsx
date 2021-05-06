import React from 'react';
import TaskList from '../../components/TaskList/TaskList';
import MyCalendar from '../../components/MyCalendar/MyCalendar';


export default function TaskListPage({ user, date, setDate, tasks, setTasks, handleDeleteTask }) {
    // const onClickDay = (date) => alert('Clicked day')
    console.log(user)
    
    return (
        <>
        <MyCalendar 
        setTasks={setTasks}
        date={date}
        setDate={setDate}
        tasks={tasks}
        // onClickDay={onClickDay}
        />
        <TaskList
        user={user}
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        />
        </>
    );
}
