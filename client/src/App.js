import { useEffect } from "react"
import { connectToSocket, subscribeToChannel, sendData } from "./api/socket"
import './App.css';

const App = () => {
  
  useEffect(() => {
    connectToSocket()
    subscribeToChannel("data", (data) => console.log(data))
  }, [])
  
  return (
    <div className="App">
      Ödev 3 - Client
      <button type="button" onClick={() => sendData("data", "test")}>Send</button>
    </div>
  );
}

export default App;
