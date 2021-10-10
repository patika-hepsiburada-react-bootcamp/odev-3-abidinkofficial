import styles from "./Form.module.css"
import { sendData } from "../../api/socket"

const Form = ({ data }) => {
  return (
    <div className={styles.form}>
      <h1>Kadere inanır mısın Neo?</h1>
      <div className={styles["form-buttons"]}>
        <button onClick={() => sendData("data", "option1")}>Hayatımı yönlendiremediğimi düşünmeyi sevmiyorum 👊 <span>-Neo</span></button>
        <button onClick={() => sendData("data", "option2")}>Kul kaderini yaşar, bahtında ne çıkarsa 🍷 <span>-Müslüm Gürses </span></button>
      </div>
    </div>
  )
}

export default Form