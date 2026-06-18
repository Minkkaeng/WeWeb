import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { Header } from './components/Header'
import { Landing } from './pages/Landing'
import { ThemeLibrary } from './pages/ThemeLibrary'
import { ErrorBoundary } from './components/ErrorBoundary'

// Templates - Folder names now match site identities
import MinimalistStudioTemplate from '../template/minimalist-studio/index'
import FreshGroveTemplate from '../template/fresh-grove/index'
import WiseTemplate from '../template/WISE/index'
import BrunLoveTannTemplate from '../template/Brun-Love-Tann/index'
import NaamTemplate from '../template/NAAM/index'
import KNexusTemplate from '../template/K-Nexus/index'
import EverGovBokjiTemplate from '../template/Bokji/index'
import Kookmin25Template from '../template/Kookmin25/index'
import GovNetworkTemplate from '../template/Gov-Network/index'
import KareumTemplate from '../template/Kareum/index'
import LeafLineTemplate from '../template/Leaf-Line/index'
import AllPetTemplate from '../template/ALLPET/index'
import GrandTasteTemplate from '../template/Grand-Taste/index'
import LuvidTemplate from '../template/luvid/index'
import VeloceTemplate from '../template/veloce/index'
import ArchivTemplate from '../template/archiv/index'
import DetailPage from '../template/archiv/DetailPage'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
        <p className="text-gray-500">Page not found</p>
        <Link to="/" className="mt-6 inline-block text-blood-coral font-medium hover:underline">Go Home</Link>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const isTemplateRoute = location.pathname.startsWith('/template');

  return (
    <div className="min-h-screen bg-white font-sans text-deep-black selection:bg-blood-coral/10 selection:text-blood-coral">
      <ScrollToTop />
      {!isTemplateRoute && <Header />}
      
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/library" element={<ThemeLibrary />} />
          
          {/* Template Preview Routes - Standardized naming */}
          <Route path="/template/minimalist-studio" element={<MinimalistStudioTemplate />} />
          <Route path="/template/fresh-grove" element={<FreshGroveTemplate />} />
          <Route path="/template/wise" element={<WiseTemplate />} />
          <Route path="/template/brun-love-tann" element={<BrunLoveTannTemplate />} />
          <Route path="/template/naam" element={<NaamTemplate />} />
          <Route path="/template/knexus" element={<KNexusTemplate />} />
          <Route path="/template/bokji" element={<EverGovBokjiTemplate />} />
          <Route path="/template/kookmin25" element={<Kookmin25Template />} />
          <Route path="/template/gov-network" element={<GovNetworkTemplate />} />
          <Route path="/template/kareum" element={<KareumTemplate />} />
          <Route path="/template/leaf-line" element={<LeafLineTemplate />} />
          <Route path="/template/allpet/*" element={<AllPetTemplate />} />
          <Route path="/template/grand-taste" element={<GrandTasteTemplate />} />
          <Route path="/template/luvid" element={<LuvidTemplate />} />
          <Route path="/template/veloce" element={<VeloceTemplate />} />
          <Route path="/template/archiv" element={<ArchivTemplate />} />
          <Route path="/template/archiv/detail" element={<DetailPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        {!isTemplateRoute && (
          <footer className="py-8 text-center text-sm text-gray-400 font-light border-t border-gray-100">
            <p>&copy; {new Date().getFullYear()} WeWeb. All rights reserved.</p>
          </footer>
        )}
      </main>
    </div>
  )
}

export default function Root() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
}
