import { useState } from 'react'
import { Login } from './pages/AccessControl/Login'
import { Temaplat } from './pages/Temaplat'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Temaplat/>
    </>
  )
}

export default App
