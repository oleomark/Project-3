import React from 'react'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';

export default function AddTaskPage({ handleAddTask }) {
    return (
        <AddTaskForm 
        handleAddTask={handleAddTask}
        />
    );
}
