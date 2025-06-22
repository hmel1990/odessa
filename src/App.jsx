import './App.css'
import Header from './components/header/Header.jsx'
import Introducing from './components/introducing/Introducing.jsx'
import Architecture from './components/architecture/Architecture.jsx'
import Modern from './components/modern/Modern.jsx'
import Buttons from './components/Buttons.jsx'
import Content from "./components/dzcards/Content/Content.jsx";



function App() {

  return (
    <>
        {/*
        <Header/>
        <Introducing />
        <Architecture/>
        <Modern/>
        <Buttons forScale={1} forCount={0} />
        */}

        <Content />
    </>
  )
}

export default App
