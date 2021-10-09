import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)

const data = {
  option1: 0,
  option2: 0,
  option3: 0,
  option4: 0
}

app.get("/", (req, res) => {
  res.json({"message": "Voting application server is running."})
})

io.on("connection", (socket) => {
  console.log("A user is connected.")

  socket.emit("data", data)

  socket.on("data", (receivedData) => {
    console.log(`Received data: ${receivedData}`)
    data = receivedData
    io.emit("data", data)
  })
})

app.listen(5000, () => {
  console.log("Voting application server started on PORT: 5000")
})