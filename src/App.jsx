import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table/Table';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

          <Header/>
          <Sidebar/>
          <Table/>
    </div>
  )
}

export default App
