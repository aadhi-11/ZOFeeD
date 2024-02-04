import React from 'react'
import "./Home.scss"
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Widgets from '../../components/widgets/Widgets'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Tables from '../../components/table/Tables'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="home-inner">
          <div className="widgets">
            <Widgets type="customers" />
            <Widgets type="order" />
            <Widgets type="Earnings" />
          </div>
          <div className="charts">
            <Chart aspect={3 / 2} title="Last 6 Months (Revenue)" />
            <Featured />
          </div>
          <div className="listContainer">
            <div className="ListTitle">
              <h1 className="title">
                Latest Transactions
              </h1>
              <Link to="#/admin/product" className='link'>
                <span>All orders</span>
              </Link>
            </div>
            <Tables />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
