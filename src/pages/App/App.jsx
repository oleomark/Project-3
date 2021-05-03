import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';


export default function App() {
	const [user, setUser] = useState(getUser());
	// const [dateState, setdateState] = useState()
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route exact path='/'>
							<InfiniteCalendar 
							width={800}
							height={400}
							selected={today}
							minDate={lastWeek}
							/>
							{/* <Calendar /> */}
						</Route>
						{/* <Route path='/orders/new'>
						</Route>
						<Route path='/orders'>
						</Route> */}
						<Redirect to='/' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
