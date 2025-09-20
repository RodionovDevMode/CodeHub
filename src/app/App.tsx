import './styles/index.scss'
import { classNames } from '../shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/ThemeProvider/router'
import { Sidebar } from 'widgets/Sidebar'
import Navbar from 'widgets/Navbar/ui/Navbar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'widgets/LangSwitcher'

function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<Navbar />
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
