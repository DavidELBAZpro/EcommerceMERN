import express from 'express'
import { productData } from './data/product.data.js'

const app = express()

app.get('/api/products', (req, res) => {
    res.send(productData.products)
})


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})  