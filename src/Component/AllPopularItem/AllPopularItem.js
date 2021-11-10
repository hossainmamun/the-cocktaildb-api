import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar.js';
import AllPopularItemDisplay from '../AllPopularItemDisplay/AllPopularItemDisplay.js';

const AllPopularItem = () => {
    const [cocktail, setCocktail] = useState([])
    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCocktail(data.drinks)
                console.log(data.drinks);
            })
    }, [])
    return (
        <section className="popular-item">
            <div style={{ background: '#073b4c', height: '80px' }}>
                <Navbar />
            </div>
            <div className="container">
                <div className="header-section" style={{marginTop: '150px'}}>
                    <h2>all popular cocktail</h2>
                </div>
                <div className="row">
                    {
                        cocktail.map(cocktail => <AllPopularItemDisplay cocktail={cocktail} key={cocktail.idDrink} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllPopularItem;