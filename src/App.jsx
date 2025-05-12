import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './components/Button'
import ScrollCardList from './components/ScrollCardList'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank" className="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Button label="Increment" onClick={handleClick} />

      <div className="bg-gray-100 min-h-screen">
        <ScrollCardList />
      </div>


    </>
  )
}

export default App
