import React from 'react'
import Navbar from "./compotents/Navbar/Navbar"
import "./App.css"
const tg = window.Telegram.WebApp

export default function App() {

  React.useEffect(() => {
    tg.ready()
  },[])


  return (
    <div> 
      <Navbar></Navbar>
    </div>
  )
}
