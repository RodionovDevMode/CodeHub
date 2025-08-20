import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageLazy } from './components/pages/AboutPage/AboutPage.lazy'
import { MainPagLazy } from './components/pages/MainPage/MainPage.lazy'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

export default function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Change Theme</button>
			<Link to={'/'}>Главная страница</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageLazy />} />
					<Route path={'/'} element={<MainPagLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}
