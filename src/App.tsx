import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import { Link } from 'react-router-dom'
import { AboutPageLazy } from './components/pages/AboutPage/AboutPage.lazy'
import { MainPagLazy } from './components/pages/MainPage/MainPage.lazy'
import { Suspense } from 'react'

export default function App() {
	return (
		<div className='app'>
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
