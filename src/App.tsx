import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { UnRequireAuth } from './contexts/Auth/UnRequireAuth';

import './App.css';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
	const auth = useContext(AuthContext);

	const handleLogout = async () => {
		await auth.signout();
		window.location.href = "/login";
	}

  return (
		<div className='container'>
			<header>
				<nav>
					{auth.userDTO && <Link to="/">Home</Link>}
					{!auth.userDTO && <Link to="/login">Login</Link>}
					{!auth.userDTO && <Link to="/register">Register</Link>}
					{auth.userDTO && <a href='' onClick={handleLogout}>Logout</a>}
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/login" element={
						<UnRequireAuth>
							<Login />
						</UnRequireAuth>
					}/>

					<Route path="/register" element={
						<UnRequireAuth>
							<Register />
						</UnRequireAuth>
					}/>

					<Route path="/" element={
						<RequireAuth>
							<Home />
						</RequireAuth>
					}/>
				</Routes>
			</main>
		</div>
  );
}

export default App;
