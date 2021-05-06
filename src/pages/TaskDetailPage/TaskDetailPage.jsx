import React from 'react';
// import { YearView } from 'react-calendar';
import { useLocation } from 'react-router';

export default function TaskDetailPage(props) {
    const {state: {task} } = useLocation()
    // const firstDate = {task.StartDate}
    // firstDate.getFullYear()+'-' + (task.startDate.getMonth()+1) + '-'+task.startDate.getDate();
    
    return (
        <>
            <h1>Task Details</h1>
            <div>Title: {task.title}</div>
            <div>Description: {task.description}</div>
            {/* <div>Start Date: {firstDate} </div> */}
            <div>Start Date: {task.startDate.slice(0,10)} </div>
            <div>End Date: {task.endDate.slice(0,10)} </div>
        </>
    )
}
