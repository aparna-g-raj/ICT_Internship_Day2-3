import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './Components/View'
import Records from './Components/Records'
import Add from './Components/Add'
import {Routes,Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to React Session</h1>
      <View/>
      <Routes>
        <Route path='/' element={<Records/>}></Route>
        <Route path='/add' element={<Add person={{
          fname:"APARNA",department:"CSAI",semester:'S5'}}/>}></Route>
      </Routes>
    </>
  )
}

export default App 
