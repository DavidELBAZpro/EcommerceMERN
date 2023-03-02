import express from 'express'
import { productData } from './data/product.data.js'

const app = express()

app.get('/api/products', (req, res) => {
    res.send(productData.products)
})

app.get('/api/products/slug/:slug', (req, res) => {
    const product = productData.products.find((x) => x.slug === req.params.slug);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
})


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})  