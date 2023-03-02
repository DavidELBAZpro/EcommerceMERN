import { Product } from '../cmps/product'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'

export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>MernEcommerce</title>
      </Helmet>
      <h1>PRODUCTS</h1>
      <Product />
    </div>
  )
}
