import React from 'react'
import "./App.css"
const tg = window.Telegram.WebApp

export default function App() {

  React.useEffect(() => {
    tg.ready()
  },[])

  const Close = () => {
    tg.close()
  }
  return (
    <div>
        <button onClick={Close}>Close</button>
    </div>
  )
}
