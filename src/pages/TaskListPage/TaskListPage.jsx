import React from 'react'
import TaskList from '../../components/TaskList/TaskList';
import 'react-infinite-calendar/styles.css';


export default function TaskListPage({ tasks }) {

    return (
        <>

        <TaskList
        tasks={tasks}
        />
        </>
    );
}
