import React from 'react'
import { Link } from 'react-router-dom'
import { netLogo } from "../Netflix-logo-red-black-png.png";
// import "../components/Navbar.css";
function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand text-danger">NETFLIX <img src="" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span
                    className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-5">
                        <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
                        <li className='nav-item'><Link to="/about" className='nav-link'>TV Shows</Link></li>
                        <li className='nav-item'><Link to="/products" className='nav-link'>Movies</Link></li>
                        <li className='nav-item'><Link to="/products" className='nav-link'>New & Popular</Link></li>
                        <li className='nav-item'><Link to="/products" className='nav-link'>My List</Link></li>
                    </ul>
                    <div className='navbar-nav ms-auto'>
                    <i className="fa-solid fa-magnifying-glass text-white mt-2"></i>
                    <Link to="/products" className='nav-link'>Kids</Link>
                    <i class="fa-solid fa-bell text-white mt-2"></i>
                    {/* <FontAwesomeIcon icon="fa-solid fa-bell" /> */}
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar