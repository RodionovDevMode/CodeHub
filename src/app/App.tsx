import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { classNames } from '../shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/ThemeProvider/router'

function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Change Theme</button>
			<Link to={'/'} style={{ paddingLeft: '15px', paddingRight: '15px' }}>
				Главная страница
			</Link>
			<Link to={'/about'}>О сайте</Link>
			<AppRouter />
		</div>
	)
}

export default App
