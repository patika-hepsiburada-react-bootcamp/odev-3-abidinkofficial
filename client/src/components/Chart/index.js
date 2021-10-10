import styles from "./Chart.module.css"
import { Doughnut } from 'react-chartjs-2';
import { getPercentage } from "../../utils";

const Chart = ({ data }) => {
  const chartData = {
    labels: [
      `Neo (%${getPercentage(data.option1, data.option2)})`,
      `Müslüm Gürses (%${getPercentage(data.option2, data.option1)})`],
    datasets: [{
      data: [data.option1 || 0, data.option2 || 0],
      backgroundColor: ["#d1aa7c", "#d18282"],
      borderColor: ["#da923f", "#da5252"]
    }]
  }

  return (
    <div className={styles["chart-container"]}>
      <Doughnut data={chartData} width={400} height={400} options={{ maintainAspectRatio: false }} />
    </div>
  )
}

export default Chart