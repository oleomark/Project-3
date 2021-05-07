import React, { useState, useRef, useEffect } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
// import { useHistory } from 'react-router-dom';


export default function AddTaskForm(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    userId: props.user._id,
    title: '',
    description: '',
    startDate: startDate,
    endDate: endDate,
  })

  const formRef = useRef();
  const startDateRef = useRef();
  // console.log(startDateRef)

  // const history = useHistory();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddTask(formData);
    window.location.href="/";
  }

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  }

  const handleDateChange = (date, time) => {
    const { _d } = date;
    if (time === 'start') {
      setFormData({ ...formData, startDate: _d });
    } else if (time === 'end') {
      setFormData({ ...formData, endDate: _d });
    }
  };

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
          <label>Select Start Date</label>
        <Datetime 
        ref={startDateRef}
        name="setStartDate"
        selected={startDate}
        // value={ formData.startDate.id }
        onChange={(date) => handleDateChange(date, 'start')}
        required
        />
        </div>
        <div>
          <label>Select End Date</label>
        <Datetime 
        ref={startDateRef}
        name="setEndDate"
        selected={endDate}
        // value={ formData.endDate.id }
        onChange={(date) => handleDateChange(date, 'end')}
        required
        />
        </div>
          <input type="hidden" value={props.user._id} name="userid"></input>
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