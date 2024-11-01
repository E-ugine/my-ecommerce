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
      <div className="h-full border-2 border-gray-200 
                border-opacity-60 rounded-lg 
                overflow-hidden">
        <div className="p-6 hover:bg-green-600 
                    hover:text-white transition 
                    duration-300 ease-in">
            <h1 className="text-2xl font-semibold mb-3">
                Hover
            </h1>
        </div>
    </div>
    </>
  )
}

export default App
