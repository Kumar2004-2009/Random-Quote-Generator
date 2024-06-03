import { useState } from 'react'
import './App.css'
import RandomQuoteGenerator from './Components/RandomQuote/RandomQuoteGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomQuoteGenerator/>
    </>
  )
}

export default App
