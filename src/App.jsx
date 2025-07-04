import './App.css'
import Header from './components/header/Header.jsx'
import {BrowserRouter, Routes, Route, NavLink, Link, Outlet, Navigate} from 'react-router';
import Homeinfo from "./components/HomeInfo.jsx";
import Content from './components/Content.jsx'
import ArchitectureRoute from "./components/ArchitectureRoute.jsx";
import Streets from "./components/Streets.jsx";
import Buildings from "./components/Buildings.jsx";
import Photo from "./components/Photo.jsx";



function App() {

  return (
    <>
        <BrowserRouter>
        <Header/>
        <Content/>
            <Routes>
                <Route path="/" element={<Homeinfo/>} />
                <Route path="/architecture" element={<ArchitectureRoute/>}>
                    <Route path="streets" element={<Streets/>}/>
                    <Route path="buildings" element={<Buildings/>}/>
                    <Route path="photo" element={<Photo/>}/>

                    <Route index element={<Navigate to="streets" replace/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
