import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home/Home'
import { ThemeProvider } from './context/ThemeContext'
import './styles/global.scss'

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
