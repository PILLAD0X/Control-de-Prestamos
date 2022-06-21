import React from 'react'
import Chart from '../Components/Dashboard/chart/Chart';
import Featured from '../Components/Dashboard/featured/Featured';
import Widget from '../Components/Dashboard/widget/Widget'
import '../styles/Home.scss'
const Home = () => {
  return (
    <div className="Home">
      <div className="homeContainer">
      <div className="widgets">
        <Widget type ='Laptop' cantidad = '353' porcentaje = '28.49'/>
        <Widget type ='Desktop' cantidad = '821' porcentaje = '66.26'/>
        <Widget type ='Workstation' cantidad = '65' porcentaje = '5.24'/>
        <Widget type ='EquiposComputo' cantidad = '1239' porcentaje = '100'/>
      </div>
      <div className="charts">
        <Featured/>
        <Chart/>
      </div>
      </div>
    </div>

  );
}

export default Home
