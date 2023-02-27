import { Link } from 'react-router-dom'
import { productData } from '../data/product.data.js'

export function Product() {
  return (
    <div className="products">
      {productData.products.map((product: any, index: number) => (
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
