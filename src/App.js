import React from 'react'
import Navbar from './components/Navbar'
import Table from './components/Table'
import {data} from './data/data'
const App = () => {
  return (
    <div className="flex flex-col px-6 bg-gray-100 h-screen">
      <Navbar/>
      <Table data={data}/>
    </div>
  )
}
export default App
