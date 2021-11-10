import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faBars } from '@fortawesome/free-solid-svg-icons'
import '../../../App.scss'
import { registerContext, userContext } from '../../../App.js';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(registerContext)
    const [cart, setCart] = useContext(userContext)
    const [navScroll, setNavScroll] = useState(false)

    const changeNavBg = () => {
        if (window.scrollY >= 100) {
            setNavScroll(true)
        }
        else {
            setNavScroll(false)
        }
    }
    window.addEventListener('scroll', changeNavBg);
    // "navbar navbar-expand-lg fixed-top cocktail-nav active"
    return (
        // navbar start
        <nav className={navScroll ? 'navbar navbar-expand-lg fixed-top cocktail-nav navigation active' : 'navbar navbar-expand-lg fixed-top cocktail-nav'}>
            <div className="container">
                <Link to="/home" className="navbar-brand cocktail-brand">MOD-KHA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon className="humburger" icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/allPopularItems">
                                <a className="nav-link" href="">Popular Items</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#review">Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">News & Blogs</a>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <Link to="/registration">
                                {
                                    loggedInUser.email ?
                                        <div>
                                            <small className="me-2 d-inline-block text-white">{loggedInUser.name}</small>
                                            <button className=" btn rounded-0 px-4" onClick={() => setLoggedInUser({})}>signOut</button>
                                        </div> :
                                        <button className="nav-link btn rounded-0">Account</button>
                                }
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <Link to="/cart">
                                <FontAwesomeIcon className="cart-icon" icon={faCartPlus} />
                                <span className="cart-length">{cart.length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // navbar end
    );
};

export default Navbar;