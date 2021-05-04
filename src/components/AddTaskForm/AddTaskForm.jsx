import React, { useState, useRef, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';

export default function AddTaskForm({ props }){
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddTask(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Add Task</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title (required)</label>
          <input
            className="form-control"
            name="title"
            // value={ formData.title }
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description (required)</label>
          <input
            className="form-control"
            name="description"
            // value={ formData.description }
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <label>Date (required)</label>
        <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31">
         </input>
        </div>
        <div>
        <label>Time </label>
        <input type="time" id="appt" name="appt"
       min="09:00" max="18:00" required>
         </input>
        </div>
        <div>
          <label>Select Day and Time</label>
          <DateTimePicker />
        </div>
        <button
          type="submit"
          className="btn"
          disabled={invalidForm}
        >
          ADD TASK
        </button>
      </form>
    </>
  );
  
}