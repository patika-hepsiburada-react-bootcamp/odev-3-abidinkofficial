import styles from "./Home.module.css"
import Form from "../../components/Form"
import Chart from "../../components/Chart"

const Home = ({ data }) => {
  if (!data) return <div>loading</div>
  return (
    <div className={styles.home}>
      <Form data={data}/>
      <Chart data={data} />
    </div>
  )
}

export default Home