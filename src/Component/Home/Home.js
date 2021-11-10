import React from 'react';
import '../../App.scss'
import Blogs from '../Blogs/Blogs.js';
import Footer from '../Footer/Footer.js';
import Review from '../Review/Review.js';
import SearchCocktail from '../SearchCocktail/SearchCocktail.js';
import Header from './Header/Header.js';

const Home = () => {
    return (
        <div>
            <Header/>
            <SearchCocktail/>
            <Review/>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default Home;