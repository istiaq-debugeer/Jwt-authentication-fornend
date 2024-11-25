import { useState } from 'react'
import {BrowserROuter as Router,Routes,Route} from 'react-router-dom'
import { Signup,Login,Profile,VerifyEmail,ForgetPassword } from './Components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/LOGIN' element={<Login/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/VerifyEmail' element={<VerifyEmail/>}/>
        <Route path='ForgetPassword/' element={<ForgetPassword/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
