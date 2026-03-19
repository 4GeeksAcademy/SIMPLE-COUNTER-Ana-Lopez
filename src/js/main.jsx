import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
let contador = 0
setInterval(() => {

  let One = Math.floor((contador / 1) % 10)
  let Two = Math.floor((contador / 10) % 10)
  let Three = Math.floor((contador / 100) % 10)
  let Four = Math.floor((contador / 1000) % 10)
  let Five = Math.floor((contador / 10000) % 10)
  let Six = Math.floor((contador / 100000) % 10)

  contador++


  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home digOne={One} digTwo={Two} digThree={Three} digFour={Four} digFive={Five} digSix={Six} onReset={resetCounter} />
    </React.StrictMode>,
  )
}, 1000)


const resetCounter = () => {
  contador = 0;
};