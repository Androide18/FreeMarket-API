import React from 'react'
import logo from '../img/logo2.png'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to='/' >
                <img id='logo' src={logo} alt='' />
            </Link>
            <SearchBar />
        </div>
    )
}

export default NavBar