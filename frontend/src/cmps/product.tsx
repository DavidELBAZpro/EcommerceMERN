import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Rating } from '../DynamicCmps/rating'

export const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products')
      setProducts(result.data)
    }
    fetchData()
  }, [])

  return (
    <div className="products">
      <Row>
        {products.map((product: any, index: number) => (
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
        ))}
      </Row>
    </div>
  )
}
