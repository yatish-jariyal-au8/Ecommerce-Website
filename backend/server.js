import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
app.use('/api/products', productRoutes)

connectDB()

app.get('/', (req, res) => {
    res.send('api is running')
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`.yellow.bold)
})