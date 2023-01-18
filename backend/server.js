import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import products from "./data/products.js"

const app = express()
dotenv.config()

app.get("/", (req, res) => {
  res.send("Hi!")
})

app.get("/products", (req, res) => {
  res.json(products)
})

app.get("/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  connectDB()
  console.log(`✅ Server running in ${process.env.NODE_ENV} at ${PORT}`)
})
