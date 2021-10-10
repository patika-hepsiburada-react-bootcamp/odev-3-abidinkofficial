import express from "express"
import http from "http"
import cors from "cors"
import { Server } from "socket.io"

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)

app.use(cors())

let data = {
  option1: 0,
  option2: 0
}

app.get("/", (req, res) => {
  res.json({"message": "Server is running."})
})

io.on("connection", (socket) => {
  console.log("A user is connected.")

  socket.emit("data", data)

  socket.on("data", (receivedData) => {
    console.log(`Received data: ${receivedData}`)
    switch (receivedData) {
      case "option1":
        data.option1++
        break;
      case "option2":
        data.option2++
        break;
      default:
        console.log("Invalid input")
    }
    io.emit("data", data)
  })

  socket.on('disconnect', () => console.log('A user is disconnected.'));
})

httpServer.listen(5000, () => {
  console.log("Server started on PORT: 5000")
})