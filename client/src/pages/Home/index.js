import Form from "../../components/Form"
import Chart from "../../components/Chart"

const Home = ({ data }) => {
  if (!data) return <div>loading</div>
  return (
    <div>
      Home
      <Form />
      <Chart data={data} />
    </div>
  )
}

export default Home