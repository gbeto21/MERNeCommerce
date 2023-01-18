import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./config/db.js"
import productsRoutes from "./routes/productRoutes.js"

const app = express()
dotenv.config()

app.get("/", (req, res) => {
  res.send("Hi!")
})

app.use("/products", productsRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  connectDB()
  console.log(
    `✅ Server running in ${process.env.NODE_ENV} at ${PORT}`.cyan.underline
  )
})
