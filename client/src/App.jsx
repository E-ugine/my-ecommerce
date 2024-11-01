import { useState } from 'react'
import './App.css'

function App() {
const [count,setCount] = useState(0)

const handleCount = () => {
  setCount((count) => count + 1);
}
  return (
    <>
      <button onClick={handleCount} ></button>
      <h1 className="text-3xl font-bold" >Count is {count} </h1>
    </>
  )
}

export default App
