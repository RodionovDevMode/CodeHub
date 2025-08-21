import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageLazy } from './components/pages/AboutPage/AboutPage.lazy'
import { MainPagLazy } from './components/pages/MainPage/MainPage.lazy'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'
import { classNames } from './styles/classNames/classNames'

function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Change Theme</button>
			<Link to={'/'} style={{ paddingLeft: '15px', paddingRight: '15px' }}>
				Главная страница
			</Link>
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

export default App
