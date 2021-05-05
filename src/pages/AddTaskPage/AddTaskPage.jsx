import React from 'react'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

export default function AddTaskPage({ handleAddTask, user }) {
    return (
        <AddTaskForm 
        handleAddTask={handleAddTask}
        user={user}
        />
    );
}
