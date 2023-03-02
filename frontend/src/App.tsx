import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './cmps/header'
import { ProductDetailsPage } from './pages/product-details-page'
import { HomePage } from './pages/home-page'
import { Container } from 'react-bootstrap'

export function App() {
  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <Header />
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductDetailsPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <footer className="text-center">All Rights Reserved</footer>
      </div>
    </Router>
  )
}
