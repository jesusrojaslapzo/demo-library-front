import { useState } from 'react'
import Main from '../pages/Main'
import '@/styles/globa.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main />
    </>
  )
}

export default App
