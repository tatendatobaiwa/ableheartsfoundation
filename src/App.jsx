import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Footer from "./components/Footer/Footer.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
      <Footer></Footer>
    </>
  )
}

export default App
