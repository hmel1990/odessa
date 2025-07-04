import './Сommon.css'
import {BrowserRouter, Routes, Route, NavLink, Link, Outlet, Navigate} from 'react-router';
export default function Content ()
{
    return (
        <>
            <ul className="nav-tabs">
                <li> <Link to="/">Главная</Link></li>
                <li> <Link to="/architecture">Архитектура</Link></li>

            </ul>
            </>
            )
}
