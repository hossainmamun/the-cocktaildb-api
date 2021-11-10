import React from 'react';
import '../../../App.scss'
import Navbar from '../../Shared/Navbar/Navbar.js';
import Banner from './Banner/Banner.js';

const Header = () => {
    return (
        <header id="main-header">
            <div className="overlay">
                <Navbar></Navbar>
                <Banner />
            </div>
        </header>
    );
};

export default Header;