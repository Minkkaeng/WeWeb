import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Landing } from './pages/Landing'
import { ThemeLibrary } from './pages/ThemeLibrary'

function App() {
  return (
    <div className="relative selection:bg-blood-coral selection:text-white">
      <Header />
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/theme" element={<ThemeLibrary />} />
      </Routes>

      <footer className="py-8 text-center text-sm text-gray-400 font-light border-t border-gray-100">
        <p>&copy; {new Date().getFullYear()} WeWeb. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
