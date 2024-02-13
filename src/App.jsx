
import './App.css'

import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'


function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
      <h2>Eduardo</h2>
    </>
  )
}

export default App
