import { sendData } from "../../api/socket"

const Form = () => {
  return (
    <div>
      <h1>Kadere inanır mısın Neo?</h1>
      <div>
        <button onClick={() => sendData("data", "option1")}>Hayatımı yönlendiremediğimi düşünmeyi sevmiyorum -Neo</button>
        <button onClick={() => sendData("data", "option2")}>Kul kaderini yaşar, bahtında ne çıkarsa -Müslüm Gürses</button>
      </div>
    </div>
  )
}

export default Form