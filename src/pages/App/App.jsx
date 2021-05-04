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


export default function App() {
	const [tasks, setTasks] = useState([]);
	const [user, setUser] = useState(getUser());
	const history = useHistory();

	// var today = new Date();
	// var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

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


	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route exact path='/'>
							<TaskListPage tasks={tasks}/>
						</Route>
						<Route exact path='/add'>
							<AddTaskPage
							handleAddTask={handleAddTask}
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
