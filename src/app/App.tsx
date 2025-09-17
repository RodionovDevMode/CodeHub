import './styles/index.scss'
import { classNames } from '../shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/ThemeProvider/router'
import { Sidebar } from 'widgets/Sidebar'
import Navbar from 'widgets/Navbar/ui/Navbar'

function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<div className='content-page'>
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App
