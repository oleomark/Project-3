import React from 'react'
import { useLocation } from 'react-router'

export default function TaskDetailPage(props) {
    const {state: {task} } = useLocation()
    

    return (
        <>
            <h1>Task Details</h1>
            <div>Title: {task.title}</div>
            <div>Description: {task.description}</div>
            {/* <div>Start Date: {task.startDate} </div> */}
            <div>End Date: {task.endDate} </div>
        </>
    )
}
