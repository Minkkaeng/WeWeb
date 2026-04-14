import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Landing } from './pages/Landing'
import { ThemeLibrary } from './pages/ThemeLibrary'
import { ErrorBoundary } from './components/ErrorBoundary'
import MinimalistStudioTemplate from '../template/minimalist-studio/index'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-black text-deep-black mb-4">404</h1>
      <p className="text-gray-500 mb-8">페이지를 찾을 수 없습니다.</p>
      <a href="/" className="px-6 py-3 bg-blood-coral text-white font-semibold rounded-xl hover:-translate-y-1 transition-all">
        홈으로 돌아가기
      </a>
    </div>
  )
}

function App() {
  const location = useLocation();
  const isTemplateRoute = location.pathname.startsWith('/template');

  return (
    <ErrorBoundary>
      <div className="relative selection:bg-blood-coral selection:text-white">
        {!isTemplateRoute && <Header />}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/theme" element={<ThemeLibrary />} />
          {/* 독립된 템플릿 전용 라우트 */}
          <Route path="/template/minimalist-studio" element={<MinimalistStudioTemplate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {!isTemplateRoute && (
          <footer className="py-8 text-center text-sm text-gray-400 font-light border-t border-gray-100">
            <p>&copy; {new Date().getFullYear()} WeWeb. All rights reserved.</p>
          </footer>
        )}
      </div>
    </ErrorBoundary>
  )
}

export default App
