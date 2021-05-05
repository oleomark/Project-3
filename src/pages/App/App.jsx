import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import TaskListPage from '../TaskListPage/TaskListPage';
import * as taskAPI from '../../utilities/tasks-api';
import AddTaskPage from '../AddTaskPage/AddTaskPage';
import EditTaskPage from '../EditTaskPage/EditTaskPage';
import TaskDetailPage from '../TaskDetailPage/TaskDetailPage';
/**
 * 
 * @todos Ask about user being passed and user being found 
 * 		   Filter the tasklist page by user and date
 * 		   Add Dates to task list object
 * 		   I want to render task list COMPONENT by specific date (onchange)
 - THEN DRILL IT BACK DOWN TO CALENDAR
* 		PROPLIFT DATESTATE OF CALENDAR TO APP = put that shit in app
				Handlefunction: whenever date changes, update the task list(useeffect)
				because my calendar UPDATES THE SETDATE, it will change in app.jsx 
			WHY IS THE USER PROP DRILL NOT WORKING!!!
			CALENDAR SETDATE FUNCTION NOT WORKING!!!
 */

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [user, setUser] = useState(getUser());
	const [date, setDate] = useState(new Date());

	const history = useHistory();

useEffect(() => {
	history.push('/')
	}, [tasks, history])

useEffect(() => {
	async function getTasks(){
		const tasks = await taskAPI.getAll();
		setTasks(tasks);
	}
	getTasks();
}, [])


async function handleAddTask(newTaskData) {
	const newTask = await taskAPI.create(newTaskData);
	setTasks([...tasks, newTask])
}

async function handleUpdateTask(updatedTaskData) {
	const updatedTask = await taskAPI.update(updatedTaskData);
	const newTasksArray = tasks.map(t => 
		t._id === updatedTask._id ? updatedTask : t
	);
	setTasks(newTasksArray);
}

async function handleDeleteTask(id){
	await taskAPI.deleteOne(id);
	setTasks(tasks.filter(t => t._id !== id))
}


	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route exact path='/'>
							<TaskListPage 
							tasks={tasks}
							setTasks={setTasks}
							handleDeleteTask={handleDeleteTask}
							date={date}
							setDate={setDate}
							/>
						</Route>
						<Route exact path='/add'>
							<AddTaskPage
							handleAddTask={handleAddTask}
							user={user}
							/>
						</Route>
						<Route exact path='/details'>
           					 <TaskDetailPage />
         				</Route>
						<Route exact path='/edit'>
							<EditTaskPage
							handleUpdateTask={handleUpdateTask}
							/>
						</Route>
						<Redirect to='/' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
