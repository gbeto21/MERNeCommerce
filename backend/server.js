const express = require("express")
const app = express()
const products = require("./data/products")

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

app.listen(5000, console.log("Server running"))
