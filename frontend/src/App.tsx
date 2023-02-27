import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './cmps/header'
import { ProductDetailsPage } from './pages/product-details-page'
import { HomePage } from './pages/home-page'

export function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductDetailsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  )
}
