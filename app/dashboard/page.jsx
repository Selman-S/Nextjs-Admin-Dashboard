import styles from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/cards'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transaction/transaction'
import Chart from '../ui/dashboard/chart/chart'

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.sidebar}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard
