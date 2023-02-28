import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { products } from '../data/product.data.js'
import axios from 'axios'

export const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      console.log('result.status')
      const result = await axios.get('/api/products')
      setProducts(result.data)
    }
    fetchData()
  }, [])

  return (
    <div className="products">
      {products.map((product: any, index: number) => (
        <div className="product" key={index}>
          <Link to={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="product-info">
            <Link to={`/product/${product.slug}`}>
              <p>{product.name}</p>
            </Link>
            <p>
              <strong>${product.price}</strong>
            </p>
            <button>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}
