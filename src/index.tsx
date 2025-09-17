import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>
)
