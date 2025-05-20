import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Redirect from './pages/Redirect'
import NotFound from './pages/NotFound'
import { FullScreenLoader, Snackbar } from './components'

export function App() {
  return (
    <>
      <FullScreenLoader />
      <Snackbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:shortLink" element={<Redirect />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}
