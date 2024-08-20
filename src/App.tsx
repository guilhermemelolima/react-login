import { Link,Routes,Route, } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { RequireAuth } from './contexts/Auth/RequireAuth'

import './App.css'
import { useContext } from 'react'
import { AuthContext } from './contexts/Auth/AuthContext'
import { UnRequireAuth } from './contexts/Auth/UnRequireAuth'

function App() {
	const auth = useContext(AuthContext);

	const handleLogout = async () => {
		await auth.signout();
		window.location.href = "/login";
	}

  return (
	<div>
		<header>
			<nav>
				{auth.user && <Link to="/"> home</Link>}
				{!auth.user && <Link to="/login"> login</Link>}
				{!auth.user && <Link to="/register"> register</Link>}
				{auth.user && <a href='' onClick={handleLogout}>Sair</a>}
			</nav>
		</header>
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
	</div>
  )
}

export default App
