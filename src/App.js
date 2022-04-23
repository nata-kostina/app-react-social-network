import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import SuperDialogContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import s from './App.module.css'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	BrowserRouter
} from "react-router-dom";
const App = (props) => {	
		return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<main className={s.main}>
					<div className="container">
						<div className={s.main__inner}>
							<NavBar store = {props.store}/>
							<div className = {s.card}>
							<Routes>							
								<Route path="profile" element={<Profile store = {props.store}/>} />
								<Route path="dialogs/*" element={<SuperDialogContainer/>} />
								<Route path = "users" element={<UsersContainer/>}/>
								<Route path="news" element={<News />} />
								<Route path="music" element={<Music />} />
								<Route path="settings" element={<Settings />} />
							</Routes>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</BrowserRouter>

	)
}

export default App;