import { useEffect, useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Rating } from '../DynamicCmps/rating'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export const Product = () => {
  // const [products, setProducts] = useState([])

  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products')
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/api/products')
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message })
      }

      // setProducts(result.data);
    }
    fetchData()
  }, [])

  return (
    <div className="products">
      <Row>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product: any, index: number) => (
            <Col key={index} sm={6} md={4} lg={3} className="mb-3">
              <Card className="product">
                <Link to={`/product/${product.slug}`}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                </Link>
                <Card.Body>
                  <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                  </Link>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                  <Card.Text>${product.price}</Card.Text>
                  <Button className="btn-primary">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  )
}
