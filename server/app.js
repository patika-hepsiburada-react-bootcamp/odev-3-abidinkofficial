import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)

app.get("/", (req, res) => {
  res.json({"message": "Voting application server is running."})
})

app.listen(5000, () => {
  console.log("Voting application server started on PORT: 5000")
})