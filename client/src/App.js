import { useEffect, useState } from "react"
import { connectToSocket, subscribeToChannel } from "./api/socket"
import './App.css';

import Home from "./pages/Home"

const App = () => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    connectToSocket()
    subscribeToChannel("data", (data) => setData(() => data))
  }, [])
  
  return (
    <div className="App">
      <Home data={data} />
    </div>
  );
}

export default App;
