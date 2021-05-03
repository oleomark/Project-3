import { useState } from 'react';
import { render } from 'react-dom';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
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
							width={400}
							height={600}
							selected={today}
							disabledDays={[0,6]}
							minDate={lastWeek}
							/>
							{/* <Calendar /> */}
						</Route>
						<Route path='/orders/new'>
							<NewOrderPage />
						</Route>
						<Route path='/orders'>
							<OrderHistoryPage />
						</Route>
						<Redirect to='/orders' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
