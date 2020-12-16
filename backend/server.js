import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
import connectDB from './config/db.js'
import colors from 'colors'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.get('/', (req, res) => {
    res.send('api is running')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`.yellow.bold)
})