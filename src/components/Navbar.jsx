import React from 'react'
import { Link } from 'react-router-dom'
import "../style/home.css"
import yellowlogo from '../image/yellowlogo.jpeg';
import brownlogo from '../image/brownlogo.jpeg';
import purplelogo from '../image/purplelogo.jpeg';

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <img src={yellowlogo} alt="" />
                <h3>CODE SPECTRUM</h3>
                <ul >
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/fields">Fields</Link>
                    <Link className='nav-link' to="/languages">Languages</Link>
                    <Link className='nav-link' to="/practice">Practice</Link>
                    <Link className='nav-link' to="/about">About</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar