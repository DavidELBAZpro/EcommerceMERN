import { Product } from '../cmps/product'
import axios from 'axios'

export const HomePage = () => {
  return (
    <div>
      <h1>PRODUCTS</h1>
      <Product />
    </div>
  )
}
