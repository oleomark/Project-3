import React, { Component, useRef } from 'react';
import TaskList from '../../components/TaskList/TaskList';
import InfiniteCalendar from '@appannie/react-infinite-calendar';
import '@appannie/react-infinite-calendar/styles.css';


var today = new Date();
var lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

export default function TaskListPage({ tasks }) {
    const inputRef = useRef(null);
    return (
        <>
        <InfiniteCalendar
        width={400}
        height={600}
        selected={today}
        disabledDays={[0, 6]}
        minDate={lastWeek}
        ref={inputRef}
        />
        <TaskList
        tasks={tasks}
        />
        </>
    );
}
